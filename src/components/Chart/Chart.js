import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Chart.module.scss';

ChartJS.register(ArcElement, Tooltip);

function Chart({ data, periodTotal }) {
  return (
    <div className={s.chartWrapper}>
      <Doughnut data={data} />
      <span className={s.total}>
        {periodTotal ? '₴' + Math.abs(periodTotal) : 'no transactions'}
      </span>
    </div>
  );
}

export default Chart;
