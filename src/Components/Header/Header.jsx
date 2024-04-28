import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import Logo from "/Assets/logo.png"

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
            <li style={{fontSize: '0.7rem', display: 'inline'}}><Link to="/summarizers">Text Summarization</Link></li>
            <li style={{fontSize: '0.7rem', display: 'inline'}}><Link to="/plag">Plagiarism Checker</Link></li>
            <li style={{fontSize: '0.7rem', display: 'inline'}}><Link to="/grammar"> Paraphrasing Tool</Link></li>
            <li style={{fontSize: '0.7rem', display: 'inline'}}><Link to="/contact">Contact</Link></li>
            <li style={{fontSize: '0.7rem', display: 'inline'}}><Link to="/login" className="login-btn">Login</Link></li>
            <li style={{fontSize: '0.7rem', display: 'inline'}}><Link to="/register" className="register-btn">Register</Link></li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
