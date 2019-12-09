import { createStore, combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import expensesReducer from './expensesReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import balanceReducer from './balanceReducer';

const rootReducer = combineReducers({
  budget: budgetReducer, // 0
  expenses: expensesReducer, // []
  balance: balanceReducer, // 0
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;