import React from 'react';
import { useSelector } from 'react-redux';

import Table from '../Table/Table';

const DiagramTab = () => {
  const { transactionsSummary } = useSelector(state => state.summary);

  return (
    <div>
      <Table {...transactionsSummary} />
    </div>
  );
};

export default DiagramTab;
