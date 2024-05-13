import ProductCard from '../../components/ProductCard';
import acessorios from '../../utils/acessoriosVeiculos.json';

export default function ProductsList() {
  return (
    <section className="products-list-container">
      { acessorios.results.map((product) => (
        <ProductCard key={product.id} product={product} /> )) }
    </section>
  );
}
