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
import { selectCategoriesTrans } from 'redux/finance/financeSlice';
import { addTransaction } from 'redux/finance/financeOperations';
import { AddTransactionSchema } from 'utils/validation';

const options = [
  { value: 'Main expenses ', label: 'Main expenses' },
  { value: 'Products', label: 'Products' },
  { value: 'Car', label: 'Car' },
  { value: 'Self care', label: 'Self care' },
  { value: 'Child care', label: 'Child care' },
  { value: 'Household products', label: 'Household products' },
  { value: 'Education', label: 'Education' },
  { value: 'Leisure', label: 'Leisure' },
  { value: 'Other expenses', label: 'Other expenses' },
  { value: 'Entertainment', label: 'Entertainment' },
];

const ModalAddTransaction = () => {
  const categoriesTrans = useSelector(selectCategoriesTrans);
  const [isChacked, setIsChacked] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      categoryName: '',
      transactionDate: converdDate(startDate),
      comment: '',
      amount: 0,
    },
    validationSchema: AddTransactionSchema,
    onSubmit: values => {
      const { transactionDate, comment, amount, categoryName } = values;

      const type = !isChacked ? 'INCOME' : 'EXPENSE';

      const categoryId =
        type === 'EXPENSE'
          ? categoriesTrans[categoryName.toLowerCase()].id
          : categoriesTrans['income'].id;

      const newTransObj = {
        transactionDate,
        type,
        categoryId,
        comment,
        amount: isChacked ? amount * -1 : amount,
      };

      dispatch(addTransaction(newTransObj));
    },
  });

  const { errors, touched } = formik;

  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });

  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

  const handleClose = () => dispatch(toggleModalAddTrans());

  return (
    <Modal open={isModalAddTransactionOpen} onClose={handleClose}>
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
          <>
            <p>
              {errors.categoryName && touched.categoryName
                ? errors.categoryName
                : null}
            </p>
            <Select
              options={options}
              classNamePrefix="custom-select"
              className={s.select}
              name="categoryName"
              placeholder="Select a category"
              onChange={e => {
                formik.setFieldValue('categoryName', e.value);
              }}
            />
          </>
        )}

        <div className={s.inputWrap}>
          <p> {errors.amount && touched.amount ? errors.amount : null}</p>
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

function converdDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
