import React from "react";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.scss";

const ProjectCard = ({ title, description, tags, link, github }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tags">
        {tags.map((tag, i) => (
          <ul key={i} className="tag">{tag}</ul>
        ))}
      </div>

      <div className="project-links">
            {link && (
          <a href={link} className="project-link" target="_blank" rel="noreferrer">
            Lien du site →
          </a>
        )}
            {github && (
            <a href={github} className="github-link" target="_blank" rel="noreferrer">
                <FaGithub size={20} />
            </a>
            )}
      </div>
    </div>
  );
};

export default ProjectCard;
