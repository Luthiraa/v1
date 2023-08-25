import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import './Projects.css';
import Nebula_logo from '../assets/img/Nebula-transformed.png';
import TwistedPix from '../assets/img/TwistedPix1.png';
import CareLink from '../assets/img/CareLink.png';
import ChaseB from '../assets/img/BBYKIM.jpg';
import logo from '../assets/img/logo.png';

export default function Projects() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, options);

    observer.observe(document.querySelector('.card-container'));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'Nebula',
      image: Nebula_logo,
      description: 'All in one health application, created in pure Javascript. Features include heeart rate tracking, blood pressure monitor and screen time tracker. Graphical user interface still underdevelopment.',
      githubLink: 'https://github.com/Luthiraa/Nebula',
      icon: FaGithub,
    },
    {
      title: 'Twisted Pix',
      image: TwistedPix,
      description: ' Travel and photography channel, producing rewviews, trip planning and persoanl experiences. Currently, we have over 1600 subscribers and closing in on 200,000 views. ',
      githubLink: 'https://www.youtube.com/@TwistedPix',
      icon: FaYoutube, 
    },
    {
      title: 'CareLink', 
      image: CareLink, 
      description: 'Health and Wellness application for ICS4U, to assist homeless & low income families with receiveing the care they require. Uses the ipify API to get location using IP address.', 
      githubLink: 'https://github.com/Luthiraa/CareLink/tree/main',
      icon: FaGithub,
    },
    {
      title:'Discord Music Bot (ChaseB)',
      image:ChaseB,
      description:'Discord music bot that I created after the discontinuation of Hydra. Uses the Discord API, and simple Python to perfrom basic commands. Future features would be song queues.', 
      githubLink:"https://github.com/Luthiraa/Discord-Music-Bot-",
      icon: FaGithub,
    },
    {
      title:'This Website',
      image:logo,
      description:'This project was my all time favourite. I was able to learn Javascript, pair it with a framework (React),  had the chance to dabble in Typscript, and expanded my knowledge of HTML and CSS.', 
      githubLink:"https://github.com/Luthiraa/luthira",
      icon: FaGithub,
    },
   
  ];
  return (   
    <div className="card-container">
       <div className={`card-container ${isVisible ? 'visible' : ''}`}>
        {cards.map((card, index) => (
          <Card
            className={`card animated`}
            key={index}
            style={{
              background: '#e0e1dd',
              borderRadius: 25,
              boxShadow: 40,
            }}
          >
          <CardActionArea>
            <CardMedia component="img" height="110" padding="100" image={card.image} alt={card.title} style={{borderRadius:25}} />
            <CardContent>
              <Typography gutterBottom variant="h5"  style={{color:'black'}}component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{color:'black'}}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href={card.githubLink} target="_blank" rel="noopener noreferrer" >
              <card.icon className="icon"  style={{color:'black'}}/>
            </a>
          </CardActions>
        </Card>
      ))}
    </div>
    </div>);
}
