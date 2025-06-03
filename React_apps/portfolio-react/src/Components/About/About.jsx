import React from 'react';
import './About.css';
import profile from '../../assets/profile.png'; // Optional: use an illustration or delete if not using

const About = () => {
  return (
    <section id='about' className="about-section fade-in-top">
      {/* Title */}
      <div className="title-box">
        <h1>About Me</h1>
      </div>

      {/* Bio Section */}
      <div className="about-content fade-in">
        {/* Left: Photo or Illustration */}
        <div className="about-left">
          <img src={profile} alt="Abhishek Pratap Singh" className="about-profile-img" />
        </div>

        {/* Right: Textual Bio */}
        <div className="about-right">
          <p>
            👋 Hi, I’m <strong>Abhishek Pratap Singh</strong> from Uttar Pradesh, India.
            I hold a <strong>Bachelor of Computer Applications (BCA)</strong> and I’m passionate about turning ideas into full-stack digital solutions.
          </p>
          <p>
            💻 I specialize in the <strong>MERN stack</strong>: MongoDB, Express.js, React.js, and Node.js. I’ve also worked extensively with Firebase for authentication and real-time apps.
          </p>
          <p>
            🎨 On the frontend, I use <strong>HTML, CSS, JavaScript, React.js</strong>, and tools like Tailwind CSS, Figma, and Canva to craft responsive, modern UIs.
          </p>
          <p>
            🧠 <strong>Philosophy:</strong> <em>“Build with purpose, learn with passion, and grow with teamwork.”</em>
            I believe in continuous learning and building software that solves real-world problems.
          </p>
          <p>
            🚀 I’m currently interning at <strong>CollegeTip.in</strong> and looking for full-time or internship opportunities where I can contribute and learn in a fast-paced team.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="cert-section fade-in-bottom">
        <h2>🎓 Certifications</h2>
        <div className="cert-buttons">
          <a className="cert-button" href="https://www.udemy.com/certificate/UC-5b7d4d15-0b4c-4f33-8634-a1d7b8e3364d/" target="_blank" rel="noreferrer">50 Days of DSA - JavaScript</a>
          <a className="cert-button" href="https://www.udemy.com/certificate/UC-5b7d4d15-0b4c-4f33-8634-a1d7b8e3364d/" target="_blank" rel="noreferrer">React - The Complete Guide</a>
          <a className="cert-button" href="https://www.udemy.com/course/html-css-javascript-certification-course-for-beginners/" target="_blank" rel="noreferrer">HTML, CSS & JS for Beginners</a>
          <a className="cert-button" href="https://www.udemy.com/certificate/UC-34825e68-10b0-417a-86b9-7e3ed9195542/" target="_blank" rel="noreferrer">50 Projects in 50 Days</a>
          <a className="cert-button" href="https://srmulearnkonnect.lntedutech.com/userProfile?tabtype=certificate
" target="_blank" rel="noreferrer">Project Management Fundamentals and Agile Essentials: Tools, Techniques, and Shortcuts</a>
        </div>
      </div>
    </section>
  );
};

export default About;
