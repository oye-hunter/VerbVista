import React from 'react';
import './Footer.css'; 
import Logo from "/Assets/logo.png"



const Footer = () => {
 
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className='footer-section'>
         <img  src={Logo} alt="Your Logo" className="logo-main" />
        </section>

        <section className='footer-section'>
          <h6 className='footer-heading'>VerbVista</h6>
          <ul className='footer-links'>
            <li><a href='#'>Our Editor</a></li>
            <li><a href='#'>Jobs</a></li>
            <li><a href='#'>FAQs</a></li>
          </ul>
        </section>
        <section className='footer-section'>
          <h6 className='footer-heading'>Services</h6>
          <ul className='footer-links'>
            <li><a href='#'>Text Summarization</a></li>
            <li><a href='#'>Plagiarism Checker</a></li>
            <li><a href='#'>Paraphrasing Tool</a></li>
            <li><a href='#'>Chatbot</a></li>
          </ul>
        </section>

        <section className='footer-section'>
          <h6 className='footer-heading'>Contact</h6>
          <ul className='footer-contact'>
            <li><i className='fas fa-home'></i> Pakistan</li>
            <li><i className='fas fa-envelope'></i> VerbVista@gmail.com</li>
            <li><i className='fas fa-phone'></i> + 92 307 896 635</li>
            <li><i className='fas fa-print'></i> + 92 307 896 636</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
