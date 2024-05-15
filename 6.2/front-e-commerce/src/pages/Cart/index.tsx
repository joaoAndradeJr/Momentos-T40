import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { GlobalState } from '../../types';
import './Cart.css';

export default function Cart() {
  const { productsInCart } = useSelector(({ cart }: GlobalState) => cart);
  const totalPrice = productsInCart.reduce((acc, { price }) => acc + price, 0).toFixed(2);

  return (
    <main className="main-container">
      { !productsInCart.length && <h1 className="empty-cart-message">Carrinho vazio</h1> }
      { productsInCart.map((product) => (
        <ProductCard product={ product } key={ product.id } />
      ))} 
      <h3 className="total">{ `Total R$ ${totalPrice}` }</h3>
    </main>
  );
}
