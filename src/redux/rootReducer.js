import { combineReducers } from 'redux';
import authReducer from './authSlice';
import transactionsReducer from './transactionsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
