import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-cb.webp";
import './Navbar.scss';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Logo Clémence Bonnin" className="navbar__logo-image" />
        </Link>

        <nav className="navbar__menu">
          <button
            className="navbar__button navbar__button--outline"
            onClick={() => scrollToSection('about')}
          >
            À propos
          </button>

          <button
            className="navbar__button navbar__button--outline"
            onClick={() => scrollToSection('projects')}
          >
            Derniers projets
          </button>

          <a
            href="mailto:clemencebonnin1102@gmail.com"
            className="navbar__button navbar__button--filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
