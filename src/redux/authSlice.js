import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/login', credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

export default authSlice.reducer;
