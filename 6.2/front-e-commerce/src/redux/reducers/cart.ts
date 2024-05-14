import { AnyAction } from 'redux';
import { ADD_TO_CART } from '../actions';
import { CartReducer } from '../../types';

const INITIAL_STATE: CartReducer = {
  productsInCart: [],
};

const cart = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      ...state,
      productsInCart: [...state.productsInCart, action.payload],
    };
  default:
    return state;
  };
};

export default cart;
