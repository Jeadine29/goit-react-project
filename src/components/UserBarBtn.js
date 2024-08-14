import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';

const UserBarBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default UserBarBtn;
