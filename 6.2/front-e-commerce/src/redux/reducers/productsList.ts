import { AnyAction } from 'redux';
import { CHANGE_PRODUCTS } from '../actions';

const INITIAL_STATE = {
  products: [],
};

const productsList = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case CHANGE_PRODUCTS:
    return {
      ...state,
      products: action.payload,
    };
  default:
    return state;
  }
};

export default productsList;
