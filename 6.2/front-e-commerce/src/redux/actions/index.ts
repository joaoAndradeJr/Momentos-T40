import { Product } from '../../types';

export const ADD_TO_CART = 'addToCard';

export const sendToCart = (payload: Product) => ({
  type: ADD_TO_CART,
  payload,
});
