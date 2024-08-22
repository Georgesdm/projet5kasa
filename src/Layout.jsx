import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';
import logowhite from './assets/logo_w.png';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="header-container">
          <img src={logo} alt="Logo Kasa" className="logo" />
          <nav>
            <ul>
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>À Propos</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-container">
            <img src={logowhite} alt="Logo Kasa" className="footer-logo" />
            <p>&copy; 2024 Kasa. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;