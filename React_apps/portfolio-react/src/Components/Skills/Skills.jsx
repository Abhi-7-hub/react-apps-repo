import React from 'react';
import './Skills.css';

// React Icons से ज़रूरी आइकन इम्पोर्ट करें
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiChakraui,
  SiCanva,
  SiNetlify,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { BsUiChecksGrid } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { SiZoom } from 'react-icons/si';

const Skill = () => {
  const skills = [
    // ✅ Technical Skills (name + icon component)
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Responsive Web Design', icon: <FaFigma /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'ES6+ Features', icon: <FaJsSquare /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'JSX', icon: <FaReact /> },
    { name: 'React Hook Form', icon: <FaReact /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'API Handling', icon: <AiOutlineApi /> },
    { name: 'Git & GitHub', icon: <FaGitAlt /> },
    { name: 'VS Code', icon: <FaNodeJs /> },       // VS Code के पास कोई dedicated icon नहीं, Node.js या generic use किया
    { name: 'Netlify', icon: <SiNetlify /> },
    { name: 'UI/UX', icon: <BsUiChecksGrid /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Chakra UI', icon: <SiChakraui /> },
    { name: 'Canva', icon: <SiCanva /> },
    { name: 'ChatGPT', icon: <FcGoogle /> },       // ChatGPT का कोई official icon नहीं, Google icon as placeholder
    { name: 'Zoom', icon: <SiZoom /> },

    // ✅ Soft Skills (icon optional—optional है, यहाँ generic icon लगाया)
    { name: 'Teamwork', icon: <FaFigma /> },
    { name: 'Communication', icon: <FaFigma /> },
    { name: 'Problem-Solving', icon: <FaFigma /> },
    { name: 'Time Management', icon: <FaFigma /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills & Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
