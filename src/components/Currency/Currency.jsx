import React from 'react';
import s from './Currency.module.scss';

const Currency = () => {
  return (
    <div className={s.tWrapper}>
      <table className={s.table}>
        <thead className={s.tHead}>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={s.tBody}>
          <tr className={s.firstLine}>
            <td>USD</td>
            <td>27.55</td>
            <td>27.65</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>30.00</td>
            <td>30.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
