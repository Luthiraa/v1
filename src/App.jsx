
import './App.css';
import HeroBanner from './components/HeroBanner.tsx'
import Drop from './assets/img/Drop.png';
import MyJourney from './components/MyJourney';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Footer from './components/Footer.jsx'
import AboutMe from './components/AboutMe';
import Decay from './components/Decay';
import GalleryRevamped from './components/GalleryRevamped';
import Projects from './components/Projects'
import Logo from './components/Logo'
function App() {
  return (
    <div>
      <Parallax pages={8.2}>
      <ParallaxLayer offset={0}>
      <HeroBanner/>
      </ParallaxLayer>
      <ParallaxLayer offset={1}style={{background:'#e0e1dd'}}>
      <AboutMe/>
      </ParallaxLayer>
      <ParallaxLayer offset={2} factor={3.5} style={{background:'#e0e1dd'}}>
      <MyJourney/>
      </ParallaxLayer>
      <ParallaxLayer offset={5.5} factor={1.5} style={{background:'#0D1B2A'}}>
      <h1 className='projects-title'>Projects</h1>
      <br/>
      <Projects/>
      </ParallaxLayer>
      <ParallaxLayer offset={7} factor={1}style={{background:'#e0e1dd'}}>
        <h1 className='gallery-title'>My Gallery</h1>
        <GalleryRevamped/>
      </ParallaxLayer>
      <ParallaxLayer offset={8} factor={0.2} style={{background:'#0D1B2A'}}>
      <Footer/>
      </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '50%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '67%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '50%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '67%' }} />

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={Drop} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '40%' }} />
          
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={0.8} style={{ opacity: 0.1}}>
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '30%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0.8} style={{ opacity: 0.1}}>

          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={Drop} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '40%' }} />
          
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
        <Decay/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '50%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '67%' }} />

        </ParallaxLayer>
        
        <ParallaxLayer offset={4} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '50%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '67%' }} />

        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={Drop} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '40%' }} />
          
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={0.8} style={{ opacity: 0.1}}>
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '30%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
          <ParallaxLayer offset={4.5} speed={0.8} style={{ opacity: 0.1}}>

          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={Drop} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={Drop} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={Drop} style={{ display: 'block', width: '5%', marginLeft: '40%' }} />
          
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App

