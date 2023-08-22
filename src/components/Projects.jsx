import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { FaGithub, FaYoutube } from 'react-icons/fa'; // Import any other icons you need
import './Projects.css';
import Nebula_logo from '../assets/img/Nebula-transformed.png'

export default function Projects() {
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
      image: '/static/images/cards/another-image.jpg',
      description: 'Description for lizard 2.',
      githubLink: 'https://github.com/project2',
      icon: FaYoutube, 
    },
   
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card className="card" key={index}>
          <CardActionArea>
            <CardMedia component="img" height="110" padding="100" image={card.image} alt={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
              <card.icon className="icon" />
            </a>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
