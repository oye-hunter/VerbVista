import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import Logo from "/D:/fyp/VerbVista/public/Assets/logo.png"

const Header = () => {
  return (
    <header>
      <nav>
      <div className='header-container' >
      <div className="image-container">
      <Link to="/">          <img  src={Logo} alt="Your Logo" className="logo-main" />
      </Link>

        </div>
        <div className="links-container">
          <ul>
            <li><Link to="/summarizers">Text Summarization</Link></li>
            <li><Link to="/plag">Plagiarism Checker</Link></li>
            <li><Link to="/plag">Paraphrasing </Link></li>
            <li><Link to="/plag">About </Link></li>
            <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
            <li><Link to="/register" className="register-btn">Register</Link></li>
           
          </ul>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
