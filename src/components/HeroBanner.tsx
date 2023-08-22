import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import styles from './HeroBanner.module.css';


const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <span>{currentText}</span>;
};

const pagesContent = [
  { background: '#1B263B', text: 'Luthira Abeykoon', subtitle: 'TWINS' },
  { background: '#778da9', text: 'Luthira Abeykoon', subtitle: 'Coding' },
  { background: '#415a77', text: 'Luthira Abeykoon', subtitle: 'Matrix' },
];

const Page = ({ style, text, subtitle, background, pageIndex }) => (
  <animated.div style={{ ...style, background }}>
    <div className={styles.container}>
      {pageIndex === 0 ? (
        <h1 className={styles['main-text']}>
          <Typewriter text={text} delay={100} />
        </h1>
      ) : (
        <h1 className={styles['main-text']}>{text}</h1>
      )}
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  </animated.div>
);

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const onClick = () => setIndex((state) => (state + 1) % 3);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => (
        <Page
          style={style}
          text={pagesContent[i].text}
          subtitle={pagesContent[i].subtitle}
          background={pagesContent[i].background}
          pageIndex={i}
        />
      ))}
    </div>
  );
}