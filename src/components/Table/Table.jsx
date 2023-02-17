import React from 'react';

import s from './Table.module.scss';

function Table({ categoriesSummary, incomeSummary, expenseSummary }) {
  // const { categoriesSummary, incomeSummary, expenseSummary } = transactions;
  // const data = Array.from({ length: 12 }, () => ({
  //   id: Math.random().toString(36).substring(7),
  //   category: 'random',
  //   sum: Math.floor(Math.random() * 100),
  // }));

  return (
    <>
      {!categoriesSummary ? (
        <p>No data</p>
      ) : (
        <div className={s.table}>
          <div className={s.table__wrapper}>
            <div className={s.table__title}>
              <span>Category</span>
              <span>Sum</span>
            </div>
            <div className={s.tableScrollBox}>
              <ul>
                {categoriesSummary.map(({ name, total }) => (
                  <li key={name} className={s.table__item}>
                    <span
                      className={s.table__color}
                      style={{ backgroundColor: '#FFAEBC' }}
                    ></span>
                    <span className={s.table__name}>{name}</span>
                    <span className={s.table__total}>{Math.abs(total)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ul>
              <li className={s.table__bottom}>
                <span className={s.first}>Expenses:</span>
                <span className={s.second__expense}>
                  {Math.abs(expenseSummary)}
                </span>
              </li>
              <li className={s.table__bottom}>
                <span className={s.first}>Incomes:</span>
                <span className={s.second__income}>{incomeSummary}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Table;
