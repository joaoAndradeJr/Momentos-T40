import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="navigation">
      <Link to="/" className="link">Home</Link>
      <Link to="/posts" className="link">Posts</Link>
    </nav>
  );
}
