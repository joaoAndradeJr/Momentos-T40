import { Product } from '../../types';

export const ADD_TO_CART = 'addToCard';
export const CHANGE_PRODUCTS = 'changeProducts';

export const sendToCart = (payload: Product) => ({
  type: ADD_TO_CART,
  payload,
});

export const changeProducts = (payload: string) => ({
  type: CHANGE_PRODUCTS,
  payload,
});
