import { Type } from './actions';

const currentExpenseReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.SET_BALANCE:
      return action.payload;
                
    default: return state;
  }
}

export default currentExpenseReducer;