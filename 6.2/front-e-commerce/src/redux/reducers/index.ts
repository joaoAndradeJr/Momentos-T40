import { combineReducers } from 'redux';
import user from './user';
import cart from './cart';
import productsList from './productsList';

const rootReducer = combineReducers({
  user,
  cart,
  productsList,
});

export default rootReducer;
