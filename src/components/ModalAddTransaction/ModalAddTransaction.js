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
import {
  selectCategoriesForId,
  selectCategoriesTrans,
} from 'redux/finance/financeSlice';
import {
  addTransaction,
  editTransaction,
} from 'redux/finance/financeOperations';
import { AddTransactionSchema } from 'utils/validation';
import IconCalendar from 'assets/icons/IconCalendar/IconCalendar';

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

const ModalAddTransaction = ({
  editModal,
  closeEditModal,
  newObjTransaction,
}) => {
  const dispatch = useDispatch();
  const converNameFromId = useSelector(selectCategoriesForId);
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );
  const categoriesTrans = useSelector(selectCategoriesTrans);
  const categNameFromData = () =>
    converNameFromId[newObjTransaction.categoryId.toLowerCase()].name;

  const isChackedDefault = editModal
    ? newObjTransaction.type === 'INCOME'
      ? false
      : true
    : true;

  const [isChacked, setIsChacked] = useState(isChackedDefault);
  const [startDate, setStartDate] = useState(() =>
    !editModal ? new Date() : new Date(newObjTransaction.transactionDate)
  );

  const handleClose = () => {
    closeEditModal(false);
    dispatch(toggleModalAddTrans());
  };

  const formik = useFormik({
    initialValues: !editModal
      ? {
          categoryName: undefined,
          comment: '',
          amount: 0,
        }
      : {
          categoryName: {
            value: categNameFromData(),
            label: categNameFromData(),
          },
          comment: newObjTransaction.comment,
          amount:
            newObjTransaction.amount > 0
              ? newObjTransaction.amount
              : newObjTransaction.amount * -1,
        },

    validationSchema: AddTransactionSchema(isChacked),
    onSubmit: values => {
      const { comment, amount, categoryName } = values;
      const type = !isChacked ? 'INCOME' : 'EXPENSE';
      const transactionDate = convertDate(startDate);
      const categoryId =
        type === 'EXPENSE'
          ? categoriesTrans[categoryName.value.toLowerCase().trim()].id
          : categoriesTrans['income'].id;
      if (editModal) {
        const editTransObj = {
          id: newObjTransaction.id,
          amount: isChacked ? amount * -1 : Number(amount),
          comment,
        };
        dispatch(editTransaction(editTransObj));
        handleClose();
      } else {
        const newTransObj = {
          transactionDate,
          type,
          categoryId,
          comment,
          amount: isChacked ? amount * -1 : Number(amount),
        };

        dispatch(addTransaction(newTransObj));
        handleClose();
      }
    },
  });

  const { errors, touched } = formik;
  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });

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
        <h2 className={s.title}>{editModal ? 'Edit' : 'Add'} transaction</h2>

        <div className={s.swichWrap}>
          <p className={isChacked ? s.transaction : s.incomeAactive}>Income</p>
          <StyledEngineProvider injectFirst>
            <FormControlLabel
              className={s.toggleWrap}
              control={
                <MaterialUISwitch
                  sx={{ m: 1, overflow: 'visible' }}
                  onChange={() => {
                    setIsChacked(!isChacked);
                    formik.resetForm();
                  }}
                  checked={isChacked}
                  disabled={editModal}
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
            <div className={s.selectWrapper}>
              {touched.categoryName && errors.categoryName ? (
                <span className={s.selectMistake}>{errors.categoryName}</span>
              ) : null}
              <Select
                options={options}
                classNamePrefix="custom-select"
                className={s.select}
                name="categoryName"
                placeholder="Select a category"
                value={formik.values.categoryName}
                onChange={e => {
                  formik.setFieldValue('categoryName', e);
                }}
                isDisabled={editModal}
              />
            </div>
          </>
        )}

        <div className={s.inputWrap}>
          <label className={s.label}>
            <input
              className={s.input}
              type="number"
              name="amount"
              placeholder="0.00"
              onChange={e => {
                formik.setFieldValue(
                  'amount',
                  e.target.value[0] === '0'
                    ? e.target.value.slice(1)
                    : e.target.value
                );
              }}
              value={formik.values.amount}
            />
            {touched.amount && errors.amount ? (
              <span className={s.inputMistake}>{errors.amount}</span>
            ) : null}
          </label>

          <div className={s.label}>
            <IconCalendar className={s.iconCalendar} />
            <DatePicker
              className={s.inputDatePicker}
              name="transactionDate"
              showIcon
              selected={startDate}
              disabled={editModal}
              onChange={date => setStartDate(date)}
            />
          </div>
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
          {editModal ? 'Edit' : 'Add'}
        </button>
        <button className={s.secondaryBtn} type="button" onClick={handleClose}>
          cancel
        </button>
      </form>
    </Modal>
  );
};

export default ModalAddTransaction;

function convertDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
