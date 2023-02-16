import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { Modal, StyledEngineProvider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import iconsSVG from 'assets/icons/symbol-defs.svg';
import MaterialUISwitch from './MaterialUISwitch';
import s from './_ModalAddTransaction.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsModalAddTransactionOpen,
  toggleModalAddTrans,
} from 'redux/global/globalSlice';
import { useFormik } from 'formik';

const options = [
  { value: 'main expenses', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'self care', label: 'Self care' },
  { value: 'child care', label: 'Child care' },
  { value: 'household products', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'other expenses', label: 'Other expenses' },
  { value: 'entertainment', label: 'Entertainment' },
];
const categoryId = [
  {
    id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    name: 'Main expenses',
    type: 'EXPENSE',
  },
  {
    id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
    name: 'Products',
    type: 'EXPENSE',
  },
  {
    id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
    name: 'Car',
    type: 'EXPENSE',
  },
  {
    id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
    name: 'Self care',
    type: 'EXPENSE',
  },
  {
    id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
    name: 'Child care',
    type: 'EXPENSE',
  },
  {
    id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
    name: 'Household products',
    type: 'EXPENSE',
  },
  {
    id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
    name: 'Education',
    type: 'EXPENSE',
  },
  {
    id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
    name: 'Leisure',
    type: 'EXPENSE',
  },
  {
    id: '719626f1-9d23-4e99-84f5-289024e437a8',
    name: 'Other expenses',
    type: 'EXPENSE',
  },
  {
    id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
    name: 'Entertainment',
    type: 'EXPENSE',
  },
  {
    id: '063f1132-ba5d-42b4-951d-44011ca46262',
    name: 'Income',
    type: 'INCOME',
  },
];

const ModalAddTransaction = () => {
  const [isChacked, setIsChacked] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9;
  // .eyJzaWQiOiJhOTNmYjg5Zi0yZGE1LTQ4ZjktYWE1ZC0xMjVlNmExZDViNWYiLCJpYXQiOjE2NzY1Mzc0OTIsImV4cCI6MTAwMDAwMDE2NzY1Mzc0OTJ9
  // .jU9HCDRYYkj7uUeqtTnm1TRyD5i - PoJ8fQeLYOkCLzs;

  const categoryIdObj = categoryId.reduce((acc, el) => {
    acc[el.name] = el;

    return acc;
  }, {});

  // console.log('categoryIdObj   :', categoryIdObj);

  const formik = useFormik({
    initialValues: {
      categoryName: null,

      transactionDate: startDate,
      type: !isChacked ? 'INCOME' : 'EXPENSE',
      comment: '',
      amount: 0,
    },
    // validationSchema: SigninSchema,
    onSubmit: values => {
      // console.log('values :', values);
      // console.log('id :', categoryIdObj[values.categoryId].id);
    },
  });

  // console.log('formik :', formik);
  const { errors, touched } = formik;

  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });

  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleModalAddTrans());

  return (
    <Modal open={isModalAddTransactionOpen} onClose={handleClose}>
      {/* <Box sx={styleModal}> */}
      <form className={s.containerModal} onSubmit={formik.handleSubmit}>
        {isMobile && (
          <button className={s.closeBtn} type="button" onClick={handleClose}>
            <svg className={s.icon} width="16px" height="16px">
              <use xlinkHref={`${iconsSVG}#icon-close`}></use>
            </svg>
          </button>
        )}
        <h2 className={s.title}>Add transaction</h2>

        <div className={s.swichWrap}>
          <p className={isChacked ? s.transaction : s.incomeAactive}>Income</p>
          <StyledEngineProvider injectFirst>
            <FormControlLabel
              className={s.toggleWrap}
              control={
                <MaterialUISwitch
                  sx={{ m: 1, overflow: 'visible' }}
                  onChange={() => setIsChacked(!isChacked)}
                  checked={isChacked}
                />
              }
            />
          </StyledEngineProvider>
          <p className={!isChacked ? s.transaction : s.expenseActive}>
            Expense
          </p>
        </div>

        {isChacked && (
          <Select
            options={options}
            classNamePrefix="custom-select"
            className={s.select}
            name="categoryName"
            placeholder="Select a category"
            // onChange={formik.handleChange}
            onChange={e => {
              // console.log('e.value :', e.value);
              formik.setFieldValue('categoryName', e.value);
            }}
            value={formik.values.categoryName}
          />
        )}

        <div className={s.inputWrap}>
          <label className={s.label}>
            <input
              className={s.input}
              type="number"
              name="amount"
              placeholder="0.00"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
          </label>

          <label className={s.label}>
            <DatePicker
              className={s.input}
              name="transactionDate"
              showIcon
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </label>
        </div>

        <label className={s.comment}>
          <input
            className={s.commentInput}
            name="comment"
            rows="1"
            type="text"
            placeholder="Comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
        </label>
        <button className={s.mainBtn} type="submit">
          add
        </button>
        <button className={s.secondaryBtn} type="button">
          cancel
        </button>
      </form>
    </Modal>
  );
};

export default ModalAddTransaction;
