import React from 'react';
import { useSelector } from 'react-redux';

const TransactionsTab = () => {
  const { expenses, incomes } = useSelector((state) => state.transactions);

  return (
    <div>
      <h2>Expenses</h2>
      {/* Map and display expenses */}
      <h2>Incomes</h2>
      {/* Map and display incomes */}
    </div>
  );
};

export default TransactionsTab;
