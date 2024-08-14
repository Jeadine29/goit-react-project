import React from 'react';
import AuthNav from '../components/AuthNav';
import AllUsersTab from '../components/AllUsersTab';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Expense Tracker</h1>
      <AuthNav />
      <AllUsersTab />
    </div>
  );
};

export default WelcomePage;
