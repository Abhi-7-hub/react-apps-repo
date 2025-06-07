import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    id: "project1",
    title: "Firebase Realtime Database CRUD App",
    description: "Real-time data syncing app using Firebase and Fetch API, featuring full CRUD operations with live updates and JSON data handling",
    github: "https://github.com/Abhi-7-hub/Abhi-7-hub/tree/main/Javascript_all_in_one/21_%20Firebase%20Fundamentals/Firebase_project_1",
    demo: "https://luminous-madeleine-deac3f.netlify.app/",
    image: "https://drive.google.com/uc?export=view&id=1aK4ZG8DV6OYAG7KeSzDDbibJEm4ExNwf",

    skills: [
      { name: "Firebase", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ],
  },
];

const ProjectList = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Key Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
