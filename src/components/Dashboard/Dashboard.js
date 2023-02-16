import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div> таблиця</div>
      <ModalAddTransaction />
      <ButtonAddTransactions />
    </>
  );
};

export default Dashboard;
