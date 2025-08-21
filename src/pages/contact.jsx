import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Email from '../components/Emailcard/Email.jsx';
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-page content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Code, Create, Connect —  I’m Just a Message Away
						</div>

						<div className="subtitle contact-subtitle">

							Thanks for stopping by! I'm always open to new connections, whether it's a question, feedback, or just a quick hello.

							I enjoy working on freelance projects and love contributing to interesting ideas or collaborations. If you'd like to work together or have something in mind, feel free to drop me an email at&nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							— I usually reply within 24 hours.

							You can also reach me through the contact form on my site

							Looking forward to hearing from you!
						</div>

					</div>

					<div className="contact-Addresses">
						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
						</div>

						<div><Email /></div>

					</div>


					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
