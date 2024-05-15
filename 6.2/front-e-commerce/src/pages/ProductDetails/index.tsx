import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchURL } from '../../services/fetchURL';
import { Product } from '../../types';
import ProductAttributes from '../../components/ProductAttributes';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { sendToCart } from '../../redux/actions';

export default function ProductDetails() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchURL(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => setProduct(data));
  }, []);

  const handleClick = () => {
    product && dispatch(sendToCart(product));
  };

  return (
    <main>
      { product && (
        <section>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          <ProductAttributes attributes={product.attributes} />
          <h3>{ `R$ ${product.price.toFixed(2)} `}</h3>
          <Button
            value="Adicionar ao carrinho"
            onClick={ handleClick }
          />
        </section> )}
    </main>
  );
}
