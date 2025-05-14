import React from 'react';
import './Projects.scss';
import projectsData from "../../data/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import kasaImage from "../../assets/kasa-website.webp";
import bookiImage from "../../assets/website-booki.webp";
import grimoireImage from "../../assets/grimoire-website.webp";
import sophieImage from "../../assets/sophie-website.webp";

const FeaturedProjects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2>Derniers projets</h2>
        <div className="parent">
          <div className="cell"><ProjectCard {...projectsData[3]} /></div>
          <div className="cell"><img src={kasaImage} alt="Kasa" className="blink-project" /></div>
          <div className="cell"><ProjectCard {...projectsData[1]} /></div>
          <div className="cell"><img src={bookiImage} alt="Booki" className="blink-project" /></div>
          <div className="cell"><img src={grimoireImage} alt="Grimoire" className="blink-project" /></div>
          <div className="cell"><ProjectCard {...projectsData[2]} /></div>
          <div className="cell"><img src={sophieImage} alt="Sophie Bluel" className="blink-project" /></div>
          <div className="cell"><ProjectCard {...projectsData[0]} /></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
