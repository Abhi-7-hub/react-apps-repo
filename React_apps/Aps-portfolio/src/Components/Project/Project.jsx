import React, { useState } from 'react';
import './Project.css';
import CRUD_OP from '../../assets/CRUD_OP.jpg'
import collegetip from '../../assets/collegetip.png'
import w3school from '../../assets/w3school.png'
import tictak from '../../assets/tictak.png'

const projects = [
  {
    id: 1,
    title: "Firebase Realtime Database CRUD App",
    description: "Real-time data syncing app using Firebase and Fetch API, featuring full CRUD operations with live updates and JSON data handling",
    img: CRUD_OP,
    github: "https://github.com/Abhi-7-hub/Abhi-7-hub/tree/main/Javascript_all_in_one/21_%20Firebase%20Fundamentals/Firebase_project_1",
    demo: "https://luminous-madeleine-deac3f.netlify.app/",
  },
  {
    id: 2,
    title: "Interactive Multimedia Gallery",
    description: "A vibrant, fully responsive photo and video gallery showcasing four dynamic categories with playful animations and interactive features..",
    img: collegetip,
    github: "https://github.com/Abhi-7-hub/Abhi-7-hub/blob/main/Galary_collegetip/index.html",
    demo: "https://visionary-gumption-5e55a4.netlify.app/",
  },
  {
    id: 3,
    title: "W3Schools Clone – Interactive Frontend Learning",
    description: "I developed a frontend clone of the W3Schools website using HTML, CSS, and JavaScript. I implemented user registration, login, and validation functionality using Firebase Authentication. The project focuses on replicating the core frontend structure and authentication flow.",
    img: w3school,
    github: "https://github.com/Naveen05-lang/B42_WEB_020_Frontend-Finesse/blob/main/homePage.js",
    demo: "https://spiffy-raindrop-2ee42b.netlify.app/",
  },

    {
    id: 3,
    title: "Tic Tac Toe Game",
    description: "Built an interactive Tic Tac Toe game using JavaScript, HTML, and CSS. Implemented player turns, win detection, and reset functionality with DOM manipulation and event handling. <hr/> Skills: JavaScript, HTML, CSS, Game Logic, DOM Manipulation",
    img: tictak,
    github: "https://github.com/Abhi-7-hub/Abhi-7-hub/tree/main/Tic%20Tac%20Toe",
    demo: "https://subtle-platypus-e79d76.netlify.app/",
  },
  // Add more projects as needed
];

const Project = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleDetails = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div id='projects' className="projects-section">
      <h2>My Key Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, img, github, demo }) => (
          <div
            key={id}
            className={`project-card ${activeId === id ? 'active' : ''}`}
            onClick={() => toggleDetails(id)}
            tabIndex={0}
            onKeyDown={(e) => { if(e.key === 'Enter') toggleDetails(id); }}
          >
            <img src={img} alt={`${title} thumbnail`} />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-links">
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
