import React from 'react';
import './AboutMe.scss';
import Collapse from "../Collapse/Collapse"; 
import portraitImg from '../../assets/portrait-photo.webp';
import navigationImg from '../../assets/navigation-icon.webp';

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
      <h2>À propos</h2>
        <div className="parent">
            <div className="cell div2">
              <h3>Services</h3>
            </div>
            <div className="cell portrait">
              <img
                src={portraitImg}
                alt="Portrait"
                className="about__portrait"
              />       
              <p className="about__bio">
               Créatrice d’interfaces numériques. Basée dans le Sud-Ouest, fraîchement formée chez OpenClassrooms. En quête de projets qui méritent du code bien fait.
              </p>
            </div>
            <div className="cell collapse">
              <Collapse title="Développement Web">
                <p>
                  J’interviens là où l’idée devient interface, pour donner forme au fonctionnel. Pour que chaque clic ait du sens — et que rien ne freine le parcours.
                </p>
              </Collapse>

              <Collapse title="UX/UI Design">
                <p>
                  J’interviens là où la forme rejoint le fond, pour créer des parcours lisibles et engageants. Et quand tout est bien pensé, l’utilisateur reste, et il revient.                
                </p>
              </Collapse>

              <Collapse title="Storytelling">
                <p>
                  J'interviens pour trouver les bons mots, aux bons endroits. Ni trop, ni trop peu — juste ce qu’il faut pour guider, rassurer, engager.
                </p>
              </Collapse>
            </div>
            <div className="cell tech">
              <ul className="about__tech">
                <li>HTML5</li>
                <li>Figma</li>
                <li>Responsive Design</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Figma</li>
                <li>SEO</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
        </div>

        <img
          src={navigationImg}
          alt="Flèche décorative"
          className="about__arrow"
        />
            
              </div>
    </section>
  );
};

export default AboutMe;
