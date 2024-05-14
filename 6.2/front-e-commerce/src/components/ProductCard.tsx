import { useDispatch } from 'react-redux';
import Button from './Button';
import { Product } from '../types';
import { sendToCart } from '../redux/actions';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendToCart(product));
  };

  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Button
        value="Adicionar ao carrinho"
        onClick={ handleClick }
      />
    </div>
  );
}
