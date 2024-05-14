import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="" element={ <Home /> } />
        <Route path="/product/:id" element={ <ProductDetails /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App
