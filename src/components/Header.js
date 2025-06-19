import React from 'react';
import './Header.css'; // Create or ensure this file exists

const Header = ({ setActivePage }) => {
  return (
    <header className="app-header">
      <h1>School Name</h1>
      <nav>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('about'); }}>About Us</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('academics'); }}>Academics</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('admissions'); }}>Admissions</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
