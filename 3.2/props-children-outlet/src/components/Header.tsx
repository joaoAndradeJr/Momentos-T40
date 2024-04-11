import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="navigation">
      <Link to="/" className="link">Home</Link>
      <Link to="/blog" className="link">Blog</Link>
    </nav>
  );
}
