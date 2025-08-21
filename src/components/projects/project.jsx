import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, projectImage, title, description, linkText, link, gitlink } = props;

	return (
		<div className="project">
			<div className="project-container">
				{/* Project live preview link */}
				<Link to={link}>
					<div className="project-image">
						<img src={projectImage} alt="Project Preview" />
					</div>
				</Link>
				<div className="project-logo">
  {Array.isArray(logo) &&
    logo.map((icon, index) => (
      <img
        key={index}
        src={icon}
        alt={`Skill ${index}`}
        className="project-skill-icon"
      />
    ))}
</div>


				<div className="project-title">{title}</div>
				<div className="project-description">{description}</div>

				{/* Link to Live Project */}
				<div className="project-link">
					<a href={link} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLink} className="project-link-icon" />
						<span className="project-link-text">{linkText}</span>
					</a>
				</div>

				{/* GitHub Link */}
				<div className="project-link">
					<a href={gitlink} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} className="project-link-icon" />
						<span className="project-link-text">GitHub</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;

