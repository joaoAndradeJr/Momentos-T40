import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { UserReducer } from '../../redux/reducers/user';
import { CartReducer } from '../../redux/reducers/cart';

interface GlobalState {
  user: UserReducer;
  cart: CartReducer;
};

export default function Cart() {
  const { productsInCart } = useSelector((state: GlobalState) => state.cart);

  return (
    <main>
      { !productsInCart.length && <h1>Carrinho vazio</h1> }
      { productsInCart.map((product) => (
        <ProductCard product={ product } key={ product.id } />
      )) }
    </main>
  );
}
