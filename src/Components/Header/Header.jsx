import React from 'react';
import './Header.css'; 
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/plag">Plag_Check</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login" className="login-btn">Login</a></li>
          <li><a href="/register" className="register-btn">Register</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
