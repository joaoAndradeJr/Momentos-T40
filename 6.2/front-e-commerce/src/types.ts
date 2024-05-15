export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  attributes?: any;
};

export interface CartReducer {
  productsInCart: Product[];
};

export interface UserReducer {
  name: string;
  email: string;
};

export interface GlobalState {
  user: UserReducer;
  cart: CartReducer;
  productsList: {
    products: Product[];
  };
};

export interface Category {
  id: string;
  name: string;
};

export interface Attribute {
  id: string;
  name: string;
  value_name: string;
};
