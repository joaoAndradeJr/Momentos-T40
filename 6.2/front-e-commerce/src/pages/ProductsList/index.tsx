import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { GlobalState } from '../../types';
import './ProductsList.css';

export default function ProductsList() {
  const { products } = useSelector((globalState: GlobalState) => globalState.productsList);

  return (
    <section className="products-container">
      { products.map((product) => (
        <ProductCard key={product.id} product={product} /> )) }
    </section>
  );
}
