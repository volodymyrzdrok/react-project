import React from 'react';

import DiagramTab from 'components/DiagramTab/DiagramTab';
import s from './Statistics.module.scss';

import { useDispatch } from 'react-redux';
import { getTransactionsStats } from 'redux/transactionsSummary/transactionsSummaryOperations';

const Statistics = () => {
  const dispatch = useDispatch();

  const onClickM = () => {
    dispatch(getTransactionsStats({ month: 2, year: 2023 }));
  };

  const onClickY = () => {
    dispatch(getTransactionsStats({ month: 3, year: 2023 }));
  };
  return (
    <>
      <div className={s.contentWrapper}>
        <div className={s.diagramBlock}>Diagram</div>
        <div className={s.transactionsSummaryBlock}>
          <div className={s.selectorsBlock}>
            <button onClick={onClickM}>February</button>
            <button onClick={onClickY}>March</button>
          </div>
          <DiagramTab />
        </div>
      </div>
    </>
  );
};

export default Statistics;
