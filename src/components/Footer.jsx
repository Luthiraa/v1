import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 

import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <h1>Connect With Me</h1>
        <div className="social-icons">
        <a href="https://github.com/Luthiraa" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/luthiraa" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/luthiraa/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Footer