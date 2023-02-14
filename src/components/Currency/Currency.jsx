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
          <tr className={s.line}>
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
    // <div className={s.contentWrapper}>
    //   <div className={s.head}>
    //     <p>Currency</p>
    //     <p>Purchase</p>
    //     <p>Sale</p>
    //   </div>
    //   <ul className={s.contentBlock}>
    //     <li className={s.info}>
    //       <span>USD</span>
    //       <span>27.55</span>
    //       <span>27.65</span>
    //     </li>
    //     <li className={s.info}>
    //       <span>USD</span>
    //       <span>27.55</span>
    //       <span>27.65</span>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Currency;
