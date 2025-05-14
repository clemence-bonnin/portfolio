import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse-card ${isOpen ? "open" : ""}`} onClick={toggle}>
      <div className="collapse-header">
        <div>
          <p>{title}</p>
        </div>
        <div className={`arrow ${isOpen ? "rotated" : ""}`}>&rarr;</div>
      </div>
      <div className={`collapse-content ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
