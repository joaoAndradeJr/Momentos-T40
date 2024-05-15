import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">
            Página Inicial
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">
            Carrinho
          </Link>
        </li>
      </ul>
    </nav>
  );
}
