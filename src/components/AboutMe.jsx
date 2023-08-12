import React from 'react';
import { useSpring, animated } from 'react-spring';
import pfp from '../assets/img/pfp.jpg'
import './AboutMe.css'

const FadeInImage = ({ src, alt }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, 
  });

  return (
    <animated.img
      src={src}
      alt={alt}
      style={fadeIn}
    />
  );
};

function AboutMe() {
  return (
    <div className='about-me'>
      <div className='text'>
        <h1>About Me</h1>
        <p>I'm an 18 year old computer engineering student. Programming has become a fervent passion of mine, particularly in the realms of Java and Python, integrating camera vision (CV,TensorFlow) and new algorithms. Recently however, I have dipped my feet into the world of front-end web development which entails working with technologies such as React, Node and Flutter.</p>
        <br/>
        <p>I also love to take photos, a passion I developed datig back to 2019. Ever since then, I enjoy capturing landscapes and night-cityscapes. Check out some of my work down below!</p>
      </div>
      <div className='pfp'>
        <FadeInImage
          src={pfp}
          alt="Your profile picture"
        />
      </div>
    </div>
  );
}

export default AboutMe;
