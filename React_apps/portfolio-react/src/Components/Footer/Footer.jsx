import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Abhishek Pratap Singh</h2>
          <p>A passionate MERN stack developer from India, dedicated to building modern full-stack web applications.</p>
        </div>

        <div className="footer-right">
          <h3>Connect with me</h3>
          <div className="footer-icons">
            <a href="https://www.facebook.com/abhll/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/abhi_2n/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/abhishek-pratap-singh-17a17a140/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/channel/UCUxsYGBn4yXpcp_VIwB5SFg" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://github.com/Abhi-7-hub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abhishek Pratap Singh. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
