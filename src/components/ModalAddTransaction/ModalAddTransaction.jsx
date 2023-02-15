import React, { useState } from 'react';
import s from './_ModalAddTransaction.module.scss';
// import {
//   ChakraProvider,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Switch,
// } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
// import './_ModalAddTransaction.module.scss';
// import { StyledEngineProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import '../../stylesheet/_vars.scss';

const MaterialUISwitch = styled(Switch)(arg => {
  console.log(arg);
  const { theme, checked } = arg;
  return {
    width: 80,
    height: 40,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      height: '40px',
      margin: 1,
      padding: 0,
      transform: 'translateX(4px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(32px)',
        '& .MuiSwitch-thumb:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 10,
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M0 1L20 0.999999" stroke="white" stroke-width="2"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#8796A5' : '#FFFFFF',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: checked ? '#ff6596' : '#24cca7',
      width: 44,
      height: 44,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M10 0V20 M0 10L20 10" stroke="white" stroke-width="2"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#FFFFFF',
      borderRadius: 30,
      border: '1px solid #e0e0e0',
    },
  };
});

const ModalAddTransaction = () => {
  const [isChacked, setIsChacked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

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
    <>
      {/* <ChakraProvider> */}
      {/* <StyledEngineProvider injectFirst> */}
      <form className={s.container}>
        <h2 className={s.title}>Add transaction</h2>

        <div className={s.swichWrap}>
          <p className={isChacked ? s.income : s.incomeAactive}>Income</p>
          {/* <Switch
            className={s.swich}
            onChange={() => setIsChacked(!isChacked)}
          /> */}
          <StyledEngineProvider injectFirst>
            <FormControlLabel
              className={s.toggleWrap}
              control={
                <MaterialUISwitch
                  sx={{ m: 1, overflow: 'visible' }}
                  // defaultChecked
                  onChange={() => setIsChacked(!isChacked)}
                  checked={isChacked}
                />
              }
              // onChange={() => setIsChacked(!isChacked)}
            />
          </StyledEngineProvider>
          <p className={!isChacked ? s.expense : s.expenseActive}>Expense</p>
        </div>

        {isChacked && (
          <Select
            options={options}
            classNamePrefix="custom-select"
            className={s.select}
            placeholder="Select a category"
          />
        )}

        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            name="amount"
            placeholder="0.00"
          />
        </label>

        <label className={s.label}>
          {/* <input className={s.input} name="date" type="date" /> */}
          <DatePicker
            className={s.input}
            name="date"
            showIcon
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </label>

        <label className={s.label}>
          Comment
          <textarea className={s.comment} name="comment" rows="1" type="text" />
        </label>
        <button className={s.mainBtn}>add</button>
        <button className={s.secondaryBtn}>cancel</button>
      </form>
      {/* </StyledEngineProvider> */}
      {/* </ChakraProvider> */}
    </>
  );
};

export default ModalAddTransaction;
