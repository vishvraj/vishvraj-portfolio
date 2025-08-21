import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.png";
import aboutIcon from "../../assets/icons/about.png";
import projectsIcon from "../../assets/icons/projects.png";
import contactIcon from "../../assets/icons/contact.png";
import "./styles/navBar.css";

const NavBar = ({ active }) => {
	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className={active === "home" ? "nav-item active" : "nav-item"}>
							<Link to="/">
								<img src={homeIcon} alt="Home" className="nav-icon" /> Home
							</Link>
						</li>
						<li className={active === "about" ? "nav-item active" : "nav-item"}>
							<Link to="/about">
								<img src={aboutIcon} alt="About" className="nav-icon" /> About
							</Link>
						</li>
						<li className={active === "projects" ? "nav-item active" : "nav-item"}>
							<Link to="/projects">
								<img src={projectsIcon} alt="Projects" className="nav-icon" /> Projects
							</Link>
						</li>
						<li className={active === "contact" ? "nav-item active" : "nav-item"}>
							<Link to="/contact">
								<img src={contactIcon} alt="Contact" className="nav-icon" /> Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
