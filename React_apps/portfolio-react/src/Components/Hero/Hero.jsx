import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import profile from '../../assets/profile.png'; // Adjust path as per your folder structure
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);

  // Custom hook to trigger fade-in animation on scroll
  useFadeInOnScroll(ref);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Opens resume download link in new tab
  const downloadResume = () => {
    window.open(
      'https://drive.google.com/uc?export=download&id=1BIUE9ynVApmySc8xcc2qhtZO58c8F8PL',
      '_blank'
    );
  };

  // Opens Gmail compose window with your email pre-filled
  const contactMe = () => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=abhishek4srmu@gmail.com`;
    window.open(gmailURL, '_blank');
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`hero fade-in ${isScrolled ? 'static-bg' : 'animated-bg'}`}
    >
      <div className="hero-content">
        <img src={profile} alt="profile" className="hero-profile-img" />
        <h1 className="hero-title">
          Hi, I'm <span>Abhishek Pratap Singh</span>
        </h1>
        <h2 className="hero-tagline">Full Stack Web Developer</h2>
        <p className="hero-description">
          MERN Stack Developer | Firebase | BCA Student | Passionate about building fast, secure and beautiful web applications.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={downloadResume}>
            Download Resume
          </button>
          <button className="btn btn-secondary" onClick={contactMe}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
