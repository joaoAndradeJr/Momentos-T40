import { AnyAction } from 'redux';
import { CHANGE_PRODUCTS, IS_FETCHING, SET_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  products: [],
  categories: [],
  isLoading: false,
};

const productsList = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case CHANGE_PRODUCTS:
    return {
      ...state,
      products: action.payload,
    };
  case SET_CATEGORIES:
    return {
      ...state,
      categories: action.payload,
    };
  case IS_FETCHING:
    return {
      ...state,
      isLoading: !state.isLoading,
    };
  default:
    return state;
  }
};

export default productsList;
