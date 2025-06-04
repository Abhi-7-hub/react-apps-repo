import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // To track scroll position
  const [menuOpen, setMenuOpen] = useState(false); // To track mobile menu open/close

  useEffect(() => {
    // Change navbar background when scrolled down
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Toggle hamburger menu on small screens
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Logo / Brand Name */}
      <div className="nav-logo-text">APS-portfolio</div>

      {/* Navigation Links */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills & Tech</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
