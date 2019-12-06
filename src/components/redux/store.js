import { createStore, combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import expensesReducer from './expensesReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  budget: budgetReducer, // 0
  expenses: expensesReducer, // []
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;