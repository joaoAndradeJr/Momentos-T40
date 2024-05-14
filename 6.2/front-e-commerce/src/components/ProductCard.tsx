import { useDispatch } from 'react-redux';
import Button from './Button';
import { Product } from '../types';
import { sendToCart } from '../redux/actions';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendToCart(product));
  };

  return (
    <>
      <Link to={ `/product/${product.id}` }>
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
      </Link>
      <Button
        value="Adicionar ao carrinho"
        onClick={ handleClick }
      />
    </>
  );
}
