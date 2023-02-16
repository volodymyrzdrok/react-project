import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { StyledEngineProvider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import iconsSVG from 'assets/icons/symbol-defs.svg';
import MaterialUISwitch from './MaterialUISwitch';
import s from './_ModalAddTransaction.module.scss';

const ModalAddTransaction = () => {
  const [isChacked, setIsChacked] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });

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

  return (
    <div className={s.backdrop}>
      <form className={s.containerModal}>
        {isMobile && (
          <button className={s.closeBtn} type="button">
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
            placeholder="Select a category"
          />
        )}

        <div className={s.inputWrap}>
          <label className={s.label}>
            <input
              className={s.input}
              type="text"
              name="amount"
              placeholder="0.00"
            />
          </label>

          <label className={s.label}>
            <DatePicker
              className={s.input}
              name="date"
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
          />
        </label>
        <button className={s.mainBtn} type="submit">
          add
        </button>
        <button className={s.secondaryBtn} type="button">
          cancel
        </button>
      </form>
    </div>
  );
};

export default ModalAddTransaction;
