import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'glass scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Dr. Altaf Samo
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active glass' : ''}`}>
          {isHomePage ? (
            <>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#audience" onClick={() => setMobileMenuOpen(false)}>Sectors</a>
            </>
          ) : (
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          )}
          
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <a href={isHomePage ? "#contact" : "/#contact"} className="btn btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
