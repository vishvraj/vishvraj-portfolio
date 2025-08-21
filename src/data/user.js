

const INFO = {
	main: {
	  title: "Vishvraj Baan",
	  name: "Vishvraj Baan",
	  email: "VishvrajBaan@gmail.com",
	  logo: process.env.PUBLIC_URL + "/logo.png",
	},
  
	socials: {
	  github: "https://github.com/vishvraj",
	  linkedin: "https://www.linkedin.com/in/vishvrajbaan/",
	  leetcode: "https://leetcode.com/Vishvraj_Baan/",
	  resume: "https://drive.google.com/drive/folders/1My9aUpgghmMy_I6ka1cREmv7DQkcNopH?usp=sharing",
	},
  
	homepage: {
	  roles: ["Front-end Developer","Back-end Developer","Full-Stack Developer" ],
	  title: "Turning ideas into interactive web experiences.",
	  description: 
	  "Hi, I'm Vishvraj — a frontend developer with hands-on experience building responsive, user-focused web applications. With a strong foundation in data structures and algorithms, I bring both creativity and problem-solving to the table. I’ve worked on real-world projects that involve modern frameworks like React and integrations with Firebase for real-time apps and EmailJS for seamless contact forms, MUI, Google Maps and more. I’m passionate about creating smooth, accessible digital experiences while continuously evolving with the tech landscape. Let’s build something impactful together!",
	},  
  
	about: {
	  title: "I' m Vishvraj Baan.\n  I turn challenges into digital solutions.",
	  description:
		"Over the years, I’ve developed a range of exciting personal and client projects. Whether building game logic, Chrome extensions, or data-driven web apps, I enjoy solving real-world problems through code. I always welcome feedback and collaboration — feel free to explore my work!",
	},
  
  
	projects: [
		{
		  title: "YouTube Homepage Clone",
		  description: "Developed a YouTube homepage clone using HTML and advanced CSS to match the original layout and design.",
		  projectImage: "https://user-images.githubusercontent.com/87961594/273366193-0cc523c4-1993-4d5e-b5fe-94e575a7fb21.png",
		  logo: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
		  ],
		  linkText: "Live Demo",
		  link: "https://vishvraj.github.io/Youtube_clone/",
		  gitlink: "https://github.com/vishvraj/Youtube_clone"
		},
		{
		  title: "Rock Paper Scissors Game",
		  description: "Classic Rock, Paper, Scissors game made with HTML, CSS, and JavaScript. Fully functional with simple animations.",
		  projectImage: "https://user-images.githubusercontent.com/87961594/273366956-75426637-c79b-457b-8166-9bf3aae00a92.png",
		  logo: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
		  ],
		  linkText: "Play Game",
		  link: "https://vishvraj.github.io/Rock_paper_scissors_game/",
		  gitlink: "https://github.com/vishvraj/Rock_paper_scissors_game"
		},
		{
		  title: "YouTube Video Timeline Bookmarker",
		  description: "Chrome extension that bookmarks timestamps on YouTube videos for easy access and reference.",
		  projectImage: "https://user-images.githubusercontent.com/87961594/273369512-31140a2b-5228-441c-9669-bd60b65f92e1.png",
		  logo: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
		  ],
		  linkText: "View Extension",
		  link: "https://github.com/vishvraj/Youtube_video_bookmark",
		  gitlink: "https://github.com/vishvraj/Youtube_video_bookmark"
		},
		{
		  title: "Pathfinding Visualizer",
		  description: "A grid-based visualizer built with React that demonstrates Dijkstra’s algorithm and pathfinding logic.",
		  projectImage: "https://user-images.githubusercontent.com/87961594/273374869-d669d7dc-7f97-4798-9e28-0bcbcc411751.png",
		  logo: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
		  ],
		  linkText: "View Project",
		  link: "https://github.com/vishvraj/PathFindervisualizer",
		  gitlink: "https://github.com/vishvraj/PathFindervisualizer"
		},
		{
		  title: "Sudoku Solver",
		  description: "A backtracking-based Sudoku solver that handles any valid board input and returns the solution.",
		  projectImage: "https://user-images.githubusercontent.com/87961594/273375250-d6bca6d4-2463-45e5-b12d-003ce7a009cd.png",
		  logo: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
		  ],
		  linkText: "View Code",
		  link: "https://github.com/vishvraj/Sudoku_solver",
		  gitlink: "https://github.com/vishvraj/Sudoku_solver"
		},
		{
		  title: "Image Recognition with Azure",
		  description: "An AI-powered image analyzer using Microsoft Cognitive Services for visual content recognition and tagging.",
		  projectImage: "https://user-images.githubusercontent.com/87961594/273375828-a6185348-01c4-431e-9b9a-a6e292a98ea4.png",
		  logo: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
		  ],
		  linkText: "View Project",
		  link: "https://github.com/vishvraj/FRT-project",
		  gitlink: "https://github.com/vishvraj/FRT-project"
		}
	  ],		
  
	  skills: [
		{
		  title: "Languages",
		  icons: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
		  ],
		  description: "Languages I use to build web applications and solve algorithmic problems.",
		},
		{
		  title: "Front-End",
		  icons: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
		  ],
		  description: "My favorite tools for crafting responsive and dynamic UIs.",
		},
		{
		  title: "Back-End",
		  icons: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
		  ],
		  description: "Technologies I use to build and scale server-side applications.",
		},
		{
		  title: "Tools",
		  icons: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
		  ],
		  description: "My go-to tools for development, version control, and containerization.",
		}
	  ],	
	  
	  
	  education: [
		{
		  id: 0,
		  img: process.env.PUBLIC_URL +"/collegeimage.png",
		  institution: "Government Engineering College, Ajmer",
		  course: "B.Tech in Information Technology",
		  duration: "July 2019 - July 2023 Cgpa: 8.34",
		  desc: "Learned Core Fundamentals of Computer Science during my Bachelor's Degree",
		  coursework: [
			"Data Structures and Algorithms",
			"Machine Learning",
			"Artificial Intelligence",
			"Web Development",
			"Object-Oriented Programming (OOP)",
			"Python",
		  ],
		},
	  ],
	  
	experiences: [
		{
			id: 0,
			img: process.env.PUBLIC_URL +"/INFLIBNET_Centre_logo.png", 

			role: "Programmer",
			company: "INFLIBNET Centre (Viswambhi)",
			date: "April 2024 - Present",
			desc: "Developed and deployed the Student Equivalence Certificate Portal (live at equivalence.ugc.ac.in) for foreign applicants, enabling streamlined verification and approval processes for education and employment in India.",
			skills: ["ReactJS", "Javascript", "SQL", "NodeJS", "MSSQL", "MongoDb"]
		},
		{
			id: 1,
			img: process.env.PUBLIC_URL +"/free.png",
			role: "Full Stack Engineer",
			company: "Self Employed Freelancer",
			date: "Aug 2023 - April 2024",
			desc: "Built projects for clients using full-stack tech like React, Node, and MUI.",
			skills: ["ReactJS", "NodeJs", "Material UI", "HTML", "CSS", "JavaScript"],
		   },
	   {
	 	id: 2,
		img: process.env.PUBLIC_URL + "/Aptclouds.jpg",
		role: "Software Engineer Trainee",
		company: "AptClouds Private Limited",
		date: "May 2023 - Aug 2023",
		desc: "Worked on Salesforce application using JavaScript, HTML, and CSS to develop reusable LWC components.",
		skills: ["Lightning Components", "Apex", "SOQL", "CPQ", "HTML", "CSS", "JavaScript"],
	   },
	  
	],
  };
  
  export default INFO;
  