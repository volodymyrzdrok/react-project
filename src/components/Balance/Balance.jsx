import React from 'react';
import s from './Balance.module.scss';

const Balance = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Your balance</p>
      <p className={s.balance}>₴ 24 000.00</p>
    </div>
  );
};

export default Balance;
