import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Dr. Altaf Samo
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Dr. Altaf Samo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
