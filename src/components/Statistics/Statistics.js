import React from 'react';

import s from './Statistics.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsStats } from 'redux/transactionsSummary/transactionsSummaryOperations';
import Table from '../Table/Table';

const Statistics = () => {
  const dispatch = useDispatch();

  const onClickM = () => {
    dispatch(getTransactionsStats({ month: 2, year: 2023 }));
  };

  const onClickY = () => {
    dispatch(getTransactionsStats({ month: 3, year: 2023 }));
  };

  const { transactionsSummary } = useSelector(state => state.summary);

  return (
    <>
      <div className={s.contentWrapper}>
        <div className={s.diagramBlock}>
          Diagram
          {/* <Chart /> */}
        </div>
        <div className={s.transactionsSummaryBlock}>
          <div className={s.selectorsBlock}>
            <button onClick={onClickM}>February</button>
            <button onClick={onClickY}>March</button>
          </div>
          <Table {...transactionsSummary} />
        </div>
      </div>
    </>
  );
};

export default Statistics;
