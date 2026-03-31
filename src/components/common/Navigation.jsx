// src/components/Navigation.jsx
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          💰 Budget App
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/category" 
              className={`nav-link ${isActive('/category') ? 'active' : ''}`}
            >
              Category
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;