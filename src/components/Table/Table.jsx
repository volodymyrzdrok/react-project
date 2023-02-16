import React from 'react';
import s from './Table.module.scss';

function Table() {
  const data = Array.from({ length: 12 }, () => ({
    id: Math.random().toString(36).substring(7),
    category: 'random',
    sum: Math.floor(Math.random() * 100),
  }));

  return (
    <div className={s.table}>
      <div className={s.table__wrapper}>
        <div className={s.table__title}>
          <span>Category</span>
          <span>Sum</span>
        </div>
        <div className={s.tableScrollBox}>
          <ul>
          {data.map(({ id, category, sum }) => (
              <li key={id} className={s.table__item}>
                <span className={s.table__color} style={{ backgroundColor: '#FFAEBC' }}></span>
                <span className={s.table__name}>{category}</span>
                <span className={s.table__total}>{sum}</span>
              </li>
            ))}
          </ul>
          </div>
        <ul>
          <li className={s.table__bottom}>
            <span className={s.first}>Expenses:</span>
            <span className={s.second__expense}>2500</span>
          </li>
          <li className={s.table__bottom}>
            <span className={s.first}>Incomes:</span>
            <span className={s.second__income}>3000</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Table;