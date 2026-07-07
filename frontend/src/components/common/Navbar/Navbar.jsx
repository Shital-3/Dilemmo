import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="pf-navbar">
      {/* Left: Logo & Brand Name */}
      <div className="pf-nav-brand">
        <div className="pf-logo-icon">
          <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-2-9-7-7-7 7-2 9 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <span className="pf-brand-name">PATHFINDER</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="pf-nav-links">
        <div className="pf-nav-item active">
          <span>Home</span>
          <div className="pf-active-indicator"></div>
        </div>
        <a href="#dilemmas" className="pf-nav-item">Dilemmas</a>
        <a href="#contribute" className="pf-nav-item">Contribute</a>
        <a href="#leaderboard" className="pf-nav-item">Leaderboard</a>
        <a href="#about" className="pf-nav-item">About</a>
      </div>

      {/* Right: Actions */}
      <div className="pf-nav-actions">
        {/* Search button */}
        <button className="pf-btn-search" aria-label="Search">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>

        {/* Login button */}
        <button className="pf-btn-login">Login</button>

        {/* Sign Up button */}
        <button className="pf-btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;