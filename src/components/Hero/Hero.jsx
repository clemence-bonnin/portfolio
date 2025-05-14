import React from 'react';
import './Hero.scss';
import parenthese1 from '../../assets/parenthese1.webp';
import parenthese2 from '../../assets/parenthese2.webp';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__tagline">Web Developpeur & UI/UX Designer.</div>

        <div className="hero__grid">
          <div className="cell cell--first-name">
            <h1 className="hero__first-name">Clémence</h1>
          </div>
          <div className="cell cell--empty-1"></div>
          <div className="cell cell--spacer-wide"></div>

          <div className="cell cell--good">
            <div className="cell__segment"></div>
            <div className="cell__segment">
              <span className="cell__label">Good scripts</span>
            </div>
          </div>

          <div className="cell cell--empty-2"></div>
          <div className="cell cell--empty-3"></div>

          <div className="cell cell--last-name">
            <h1 className="hero__last-name">Bonnin.</h1>
          </div>

          <div className="cell cell--empty-4"></div>

          <div className="cell cell--great">
            <div className="cell__segment"></div>
            <div className="cell__segment">
              <span className="cell__label">Great spirit</span>
            </div>
          </div>

          <div className="cell cell--after-great"></div>
        </div>

        <img
          src={parenthese2}
          alt="3D green bracket"
          className="hero__parenthese2"
        />

        <img
          src={parenthese1}
          alt="Bracket bottom"
          className="hero__parenthese1"
        />
      </div>
    </section>
  );
};

export default HeroSection;
