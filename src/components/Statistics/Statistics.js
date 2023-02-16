import React from 'react';
import { useDispatch } from 'react-redux';
import { getTransactionsStats } from 'redux/transactionsSummary/transactionsSummaryOperations';

const Statistics = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getTransactionsStats({ month: 2, year: 2022 }));
  };
  return (
    <>
      <button onClick={onClick}>Test</button>
    </>
  );
};

export default Statistics;
