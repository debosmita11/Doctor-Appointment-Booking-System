// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
// You would replace this with your actual logo import
// import logo from './logo.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Placeholder logo text if image isn't available
  const logoText = (
    <div className="logo-placeholder">
        MediTrust
    </div>
  );

  return (
    <header className="app-header">
      <div className="logo-container">
      <img
          src="\healthcare-hospital-medical-2-svgrepo-com.svg" // Update path as per your project structure
          alt="MediTrust Logo"
          className="logo-image"
        />
        {logoText} {/* Or use the placeholder text */}
      </div>
      <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#doctors">ALL DOCTORS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contacts">CONTACTS</a></li>
        </ul>
         {/* Sign In button is outside the ul for separate styling/positioning if needed */}
        <button className="signin-button desktop-signin">Sign In</button>
      </nav>
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        {/* Simple text-based hamburger icon */}
        <span className="hamburger-icon">☰</span>
      </button>
       {/* Mobile menu Sign In button - often placed inside the dropdown */}
       {isMobileMenuOpen && (
           <button className="signin-button mobile-signin">Sign In</button>
       )}
    </header>
  );
};

export default Header;