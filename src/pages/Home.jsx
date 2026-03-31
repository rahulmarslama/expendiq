// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Budget Manager</h1>
      <p>Manage your finances with ease</p>
      
      <div className="button-grid">
        <button 
          className="action-button category-button"
          onClick={() => navigate('/category')}
        >
          <span className="button-icon">📂</span>
          <span className="button-text">
            <strong>Categories</strong>
            <small>Manage your spending categories</small>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Home;