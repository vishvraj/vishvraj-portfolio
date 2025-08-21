import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "./stars.scss";
import Typewriter from 'typewriter-effect';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import Skills from "../components/skills/skills.jsx";
import Experience from '../components/experience/experience.js';
import ParticleComponent from "../components/Particlecomp/ParticlesBackground.jsx";
import "../components/Particlecomp/ParticlesSection.css";
import "./styles/homepage.css";
import { motion } from 'framer-motion';
import FluidCanvas from '../components/fluidColouredCanvas/fluidColouredCanvas.js'




const Homepage = () => {

	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const ticking = useRef(false); // for requestAnimationFrame control

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (!ticking.current) {
				window.requestAnimationFrame(() => {
					const scroll = window.pageYOffset;
					const newSize = Math.max(40, 80 - (scroll * 4) / 10);

					setLogoSize(newSize);
					setStayLogo(newSize <= 40);

					ticking.current = false;
				});
				ticking.current = true;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");
	const isMobile = window.innerWidth < 768; // or use a hook

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: "none",
		transition: "all 0.2s ease-in-out",

	};




	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>


			<div className="page-content">

				<NavBar active="home" />

				<div>
					<div className="intro route bg-image background">

						<div id="stars" />
						<div id="stars2" />
						<div id="stars3" />

						<div className="content-wrapper">

							<div className="homepage-logo-container">
								<div style={logoStyle} className={`logo-wrapper ${stayLogo ? "sticky-logo" : ""}`}>
									<Logo width={logoSize} link={false} />
									<span className="logo-name">
										Vishvraj Baan
									</span>
								</div>
							</div>



							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="title homepage-title">
										<div className="text-loop">
											I am a
											<span className="text-loop-span">
												<Typewriter
													options={{
														strings: INFO.homepage.roles,
														autoStart: true,
														loop: true,
													}}
												/>
											</span>
										</div>
										{/* {INFO.homepage.title} */}
									</div>

									<div className="homepage-subtitle subtitle">
										{INFO.homepage.description}
									</div>
									<a
										href={INFO.socials.resume}
										target="_blank"
										rel="noreferrer"
										className="resume-link"
									>
										<span className="resume-text">Resume</span>
										<FontAwesomeIcon icon={faFilePdf} className="homepage-social-icon" />
									</a>



								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src={`${process.env.PUBLIC_URL}/homepage.png`}
												alt="homepage"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


			

					<div className="fluid-wrapper">

						<FluidCanvas />
						<div className="content-wrapper">
							<div className="homepage-container">


								<div className="homepage-socials">
								
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.main.linkedin}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="homepage-social-icon"
										/>
									</a>

									<a
										href={`mailto:${INFO.main.email}`}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faMailBulk}
											className="homepage-social-icon"
										/>
									</a>
								</div>


								<motion.div
									initial={{ opacity: 0, x: isMobile ? 10 : 200 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 2, ease: 'easeOut' }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<Skills />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 80 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.5, ease: 'easeOut' }}
									viewport={{ once: true, amount: 0.5 }}
								>
									<Experience />					
								</motion.div>
							</div>
						</div>
					</div>

					<div className="homepage-after-title">


						<div className="particle-section" id="projects">
							<ParticleComponent />

							<div className="content-wrapper">
								<motion.div
									initial={{ opacity: 0, scale: 0.95, y: 40 }}
									whileInView={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ duration: 1.5, ease: 'easeOut' }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<AllProjects />
								</motion.div>
								<div className="page-footer">
									<Footer />
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>



		</React.Fragment>
	);
};

export default Homepage;
