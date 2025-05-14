import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="https://github.com/clemence-bonnin" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/clémence-bonnin-51a922a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://dribbble.com/cleamence" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </div>
      <p className="footer__copyright">
        © 2025 Design & Code by Clémence Bonnin
      </p>
    </footer>
  );
};

export default Footer;
