import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    expenses: [],
    incomes: [],
  },
  reducers: {
    setExpenses(state, action) {
      state.expenses = action.payload;
    },
    setIncomes(state, action) {
      state.incomes = action.payload;
    },
  },
});

export const { setExpenses, setIncomes } = transactionsSlice.actions;

export const fetchTransactions = () => async (dispatch) => {
  try {
    const response = await axios.get('/transactions');
    dispatch(setExpenses(response.data.expenses));
    dispatch(setIncomes(response.data.incomes));
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
  }
};

export default transactionsSlice.reducer;
