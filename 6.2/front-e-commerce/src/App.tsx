import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App
