import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fecthURL } from '../../services/fetchURL';
import { Product } from '../../types';
import ProductAttributes from '../../components/ProductAttributes';

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fecthURL(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => setProduct(data));
  }, []);  

  return (
    <main>
      { product && (
        <section>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          <ProductAttributes attributes={product.attributes} />
          <p>{product.price}</p>
        </section> )}
    </main>
  );
}
