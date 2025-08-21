// src/components/common/Skills.js

import React from "react";
import "./styles/skills.css"; // make sure to style this
import INFO from "../../data/user";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {INFO.skills.map(({ title, icons, description }) => (
          <div className="skill-card" key={title}>
            <h2>{title}</h2>
            <div className="skill-icons">
              {icons.map((iconUrl, index) => (
                <img src={iconUrl} alt={title + index} key={index} className="skill-icon" />
              ))}
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
