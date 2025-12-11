import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
        <h2>MyApp</h2>
        </Link>
        
      </div>
      <nav className="nav-links">
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
      </nav>
    </header>
  );
}

export default Header;
