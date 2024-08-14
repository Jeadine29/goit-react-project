import React from 'react';
import { Link } from 'react-router-dom';

const TransactionsHistoryNav = () => {
  return (
    <nav>
      <Link to="/transactions/history/expenses">Expenses History</Link>
      <Link to="/transactions/history/incomes">Incomes History</Link>
    </nav>
  );
};

export default TransactionsHistoryNav;
