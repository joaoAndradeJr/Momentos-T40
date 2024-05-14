import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { GlobalState } from '../../types';

export default function Cart() {
  const { productsInCart } = useSelector(({ cart }: GlobalState) => cart);

  return (
    <main>
      { !productsInCart.length && <h1>Carrinho vazio</h1> }
      { productsInCart.map((product) => (
        <ProductCard product={ product } key={ product.id } />
      )) }
    </main>
  );
}
