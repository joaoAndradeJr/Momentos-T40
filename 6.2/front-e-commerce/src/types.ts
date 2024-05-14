export interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
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
};

export interface Category {
  id: string;
  name: string;
};
