import { fetchURL } from '../../services/fetchURL';
import { Category, DispatchType, Product } from '../../types';

export const ADD_TO_CART = 'addToCard';
export const CHANGE_PRODUCTS = 'changeProducts';
export const SET_CATEGORIES = 'setCategories';
export const IS_FETCHING = 'isFetching';
export const SUCCESS = 'success';
export const REJECTED = 'rejected';

export const sendToCart = (payload: Product) => ({
  type: ADD_TO_CART,
  payload,
});

export const changeProducts = (payload: string) => ({
  type: CHANGE_PRODUCTS,
  payload,
});

export const setCategories = (payload: Category[]) => ({
  type: SET_CATEGORIES,
  payload,
});

const isFetching = () => ({
  type: IS_FETCHING,
});

export const fetchCategories = () => async (dispatch: DispatchType) => {
  dispatch(isFetching());
  const categories = await fetchURL('https://api.mercadolibre.com/sites/MLB/categories');
  dispatch(setCategories(categories));
  dispatch(isFetching());
};

export const fetchProductsByCategory = (id: string) => async (dispatch: DispatchType) => {
  dispatch(isFetching());
  const { results } = await fetchURL(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  dispatch(changeProducts(results));
  dispatch(isFetching());
};
