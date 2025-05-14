import React from "react";
import "./Contact.scss";
import reacticon from '../../assets/react-icon.webp';


const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__left">
          <h2>Let's talk</h2>
        </div>

        <div className="contact__divider" />

        <div className="contact__right">
          <p>Pas besoin d’un brief béton pour prendre contact.<br /> Un projet en tête, ou juste une idée à éclaircir ? <br />Tout commence par quelques lignes.
          <br />Envoyées ici, lues avec attention.</p>
          <a
            href="mailto:clemencebonnin1102@gmail.com"
            className="navbar__button navbar__button--filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lancer la discussion
          </a>
        </div>

        <img
          src={reacticon}
          alt="3D Atom Visual"
          className="contact__illustration"
        />
      </div>
    </section>
  );
};

export default ContactSection;
