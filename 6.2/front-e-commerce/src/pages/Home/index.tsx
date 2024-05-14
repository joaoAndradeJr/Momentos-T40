import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CategoriesList from '../../components/CategoriesList';
import ProductsList from '../ProductsList';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="main-container">
      <CategoriesList />
      <ProductsList />
      <Button
        value="Ir para o carrinho"
        onClick={ () => navigate('/cart') }
      />
    </main>
  );
}
