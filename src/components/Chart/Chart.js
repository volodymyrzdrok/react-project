import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Chart.module.scss';

ChartJS.register(ArcElement, Tooltip);

function Chart({ data, periodTotal }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    chart.canvas.parentNode.style.height = '100%';
    chart.canvas.parentNode.style.width = '100%';
  }, []);

  return (
    <div className={s.chartWrapper}>
      <Doughnut ref={chartRef} data={data} />
      <span className={s.total}>
        {periodTotal
          ? `₴ ${Math.abs(periodTotal.toFixed(2))}`
          : 'no transactions'}
      </span>
    </div>
  );
}

export default Chart;
