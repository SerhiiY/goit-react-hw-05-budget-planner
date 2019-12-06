import { Type } from './actions';

const currentExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ADD_EXPENSE:
      return [action.payload, ...state];

      case Type.REMOVE_EXPENSE:
    return state.filter(expense => expense.id !== action.payload);
                
    default: return state;
  }
}

export default currentExpenseReducer;