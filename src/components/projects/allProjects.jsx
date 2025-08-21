import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	const [showAll, setShowAll] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const displayedProjects = isMobile
		? showAll
			? INFO.projects
			: INFO.projects.slice(0, 3)
		: INFO.projects;

	return (
		<div className="all-projects-wrapper">
			<motion.div
				className="all-projects-container"
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<AnimatePresence>
					{displayedProjects.map((project, index) => (
						<motion.div
							className="all-projects-project"
							key={index}
							layout
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 30 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
						>
							<Project {...project} />
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{isMobile && (
				<div style={{ textAlign: "center"}}>
					<button className="toggle-button" onClick={() => setShowAll(!showAll)}>
						{showAll ? "Show Less" : "More Projects"}
					</button>
				</div>
			)}
		</div>
	);
};

export default AllProjects;
