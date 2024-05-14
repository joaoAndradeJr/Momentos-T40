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
      ))} 
      { <h3>{ `Total: R$ ${productsInCart.reduce((acc, { price }) => acc + price, 0).toFixed(2)}` }</h3> }
    </main>
  );
}
