import CategoriesList from '../../components/CategoriesList';
import ProductsList from '../ProductsList';
import './Home.css';

export default function Home() {
  return (
    <main className="main-container">
      <CategoriesList />
      <ProductsList />
    </main>
  );
}
