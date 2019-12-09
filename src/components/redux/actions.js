import shortid from 'shortid';

export const Type = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  SET_BUDGET: 'SET_BUDGET',
  SET_BALANCE: 'SET_BALANCE',
};

export const setBudget = budget => ({
  type: Type.SET_BUDGET,
  payload: +budget,
});

export const addExpense = ({ name, amount }) => {
  const expense = {
    id: shortid.generate(),
    name,
    amount: +amount,
  };
  return ({
    type: Type.ADD_EXPENSE,
    payload: expense,
  })
};

export const removeExpense = id => ({
  type: Type.REMOVE_EXPENSE,
  payload: id,
});

export const setBalance = value => ({
  type: Type.SET_BALANCE,
  payload: value,
})