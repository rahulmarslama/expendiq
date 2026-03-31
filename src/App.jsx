import './App.css'
import Home from './pages/Home.jsx'
import Category from './pages/Category'
import { AuthProvider } from 'oidc-react';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const oidcConfig = {
  onSignIn: async (user) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },
  authority: 'https://localhost:2900',
  clientId:
    'expendiq_client',
  responseType: 'code',
  redirectUri:'http://localhost:2500/',
  scope:'openid profile expendiqApiScope'
};

function App() {

  return (
    <AuthProvider {...oidcConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App