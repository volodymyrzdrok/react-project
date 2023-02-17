import React from 'react';
import { useSelector } from 'react-redux';
import { selectFinancesBalance } from 'redux/finance/financeSlice';
import s from './Balance.module.scss';

const Balance = () => {
  const totalBalance = useSelector(selectFinancesBalance);

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Your balance</p>
      <p className={s.balance}>₴ {totalBalance.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
