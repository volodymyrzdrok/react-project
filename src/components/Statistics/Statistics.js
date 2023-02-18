import React from 'react';

import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import s from './Statistics.module.scss';

import colors from './colors';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsStats } from 'redux/transactionsSummary/transactionsSummaryOperations';

const formatData = transactions => {
  const dataTotal = [];
  const dataName = [];

  if (transactions.length === 0) {
    return { dataTotal: [100], dataName };
  }

  for (const category of transactions) {
    dataTotal.push(category.total);
    dataName.push(category.name);
  }

  return { dataTotal, dataName };
};

const filterColors = categories => {
  const filteredColorsArr = [];
  const colorArr = Object.entries(colors);
  for (const category of categories) {
    const filteredColor = colorArr.find(el => el[0] === category)[1];
    filteredColorsArr.push(filteredColor);
  }

  return filteredColorsArr;
};

const Statistics = () => {
  const dispatch = useDispatch();

  const { transactionsSummary } = useSelector(state => state.summary);

  const onClickM = () => {
    dispatch(getTransactionsStats({ month: 2, year: 2023 }));
  };

  const onClickY = () => {
    dispatch(getTransactionsStats({ month: 4, year: 2023 }));
  };

  // const [period, setPeriod] = useState({});
  // const getPeriod = (month, year) => {
  //   setPeriod({ month, year });
  // };

  // useEffect(() => {
  //   dispatch(getTransactionsStats(period));
  // }, [dispatchб period]);

  const transactionData = transactionsSummary?.categoriesSummary || [];
  const { dataTotal, dataName } = formatData(transactionData);
  const filteredColors = filterColors(dataName);
  const datasetLabel = dataName.length ? 'Total' : 'No data';

  const data = {
    labels: dataName,
    datasets: [
      {
        label: datasetLabel,
        data: dataTotal,
        backgroundColor: filteredColors.length ? filteredColors : 'gray',
        borderColor: 'transparent',
        cutout: '70%',
      },
    ],
    options: {
      responsive: true,

      maintainAspectRatio: false,
    },
  };

  return (
    <>
      <p className={s.title}>Statistics</p>
      <div className={s.contentWrapper}>
        <div>
          <div className={s.diagramBlock}>
            <Chart data={data} periodTotal={transactionsSummary?.periodTotal} />
          </div>
        </div>
        <div className={s.transactionsSummaryBlock}>
          <div className={s.selectorsBlock}>
            <button onClick={onClickM}>February</button>
            <button onClick={onClickY}>March</button>
          </div>
          <Table {...transactionsSummary} colors={filteredColors} />
        </div>
      </div>
    </>
  );
};

export default Statistics;
