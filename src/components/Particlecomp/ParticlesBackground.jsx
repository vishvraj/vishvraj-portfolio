// src/components/ParticleComponent.jsx
import { useEffect } from "react";

const ParticleComponent = () => {
	useEffect(() => {
		if (window.particlesJS) {
			window.particlesJS("particles-js", {
				particles: {
					number: { value: 10 },
					size: { value: 3 },
					color: { value: "#ffffff" },
					line_linked: {
						enable: true,
						color: "#ffffff",
						opacity: 0.4,
					},
					move: {
						enable: true,
						speed: 2,
					},
				},
				interactivity: {
					events: {
						onhover: { enable: true, mode: "repulse" },
						onclick: { enable: true, mode: "push" },
					},
				},
			});
		}
	}, []);

	return <div id="particles-js" className="particles-container" />;
};

export default ParticleComponent;
