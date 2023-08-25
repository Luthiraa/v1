import React, { useState, useEffect } from 'react';
import './Logo.css'; 
import comp_1 from '../assets/logo/1.png';
import comp_2 from '../assets/logo/2.png';
import comp_3 from '../assets/logo/3.png';

const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('flying-images');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Add a timeout to trigger the animation after a delay
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimeout); // Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <div id="flying-images" className={`flying-images ${isVisible ? 'visible' : ''}`}>
      <img className="top-image" src={comp_1} alt="Top Flying Image" />
      <img className="left-image" src={comp_2} alt="Left Flying Image" />
      <img className="right-image" src={comp_3} alt="Right Flying Image" />
    </div>
  );
};

export default Logo;
