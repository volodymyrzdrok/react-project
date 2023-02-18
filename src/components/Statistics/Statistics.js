import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import s from './Statistics.module.scss';
import colors from './colors';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsStats } from 'redux/transactionsSummary/transactionsSummaryOperations';
import DateSelect from 'components/DateSelect/DateSelect';

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

  if (categories.length !== 0) {
    for (const category of categories) {
      const filteredColor = colorArr.find(el => el[0] === category)[1];
      filteredColorsArr.push(filteredColor);
    }
  }

  return filteredColorsArr;
};

const Statistics = () => {
  const { transactionsSummary } = useSelector(state => state.summary);
  const dispatch = useDispatch();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChange = event => {
    event.target.name === 'month'
      ? setMonth(event.target.value)
      : setYear(event.target.value);
  };

  useEffect(() => {
    dispatch(getTransactionsStats({ month, year }));
  }, [dispatch, month, year]);

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
            <DateSelect month={month} year={year} handleChange={handleChange} />
          </div>
          <Table {...transactionsSummary} colors={filteredColors} />
        </div>
      </div>
    </>
  );
};

export default Statistics;
