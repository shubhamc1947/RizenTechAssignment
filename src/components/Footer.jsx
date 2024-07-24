import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="footer-content text-center">
          <p className="mb-3">Connect with me:</p>
          <ul className="footer-links list-unstyled d-flex justify-content-center mb-0">
            <li className="mx-3">
              <a 
                href="https://www.linkedin.com/in/shubhamchat03/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className="mx-3">
              <a 
                href="https://github.com/shubhamc1947" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li className="mx-3">
              <a 
                href="mailto:shubhamchat220122@gmail.com" 
                className="text-white"
              >
                <FaEnvelope size={20} /> 
              </a>
            </li>
            <li className="mx-3">
              <a 
                href="tel:9026944460" 
                className="text-white"
              >
                <FaPhone size={20} /> 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
