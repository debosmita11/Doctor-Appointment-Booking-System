import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SigninHeader.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        <img
          src="/healthcare-hospital-medical-2-svgrepo-com.svg"
          alt="MediTrust Logo"
          className="logo-image"
        />
        <div className="logo-placeholder">MediTrust</div>
      </div>

      <div className="header-right">
        <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#doctors">ALL DOCTORS</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
        </nav>

        <Link to="/signin" className="signin-link desktop-signin" onClick={closeMobileMenu}>
          <button className="signin-button">Sign Up</button>
        </Link>

        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">☰</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <button className="signin-button mobile-signin">Sign In</button>
      )}
    </header>
  );
};

export default Header;
