import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './GalleryRevamped.css'; // Assuming you've placed the CSS file in the same directory
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';
import img8 from '../assets/gallery/img8.jpg';
import img9 from '../assets/gallery/img9.jpg';
import img10 from '../assets/gallery/img10.jpg';
import img11 from '../assets/gallery/img11.jpg';
import img12 from '../assets/gallery/img12.jpg';

export default function ImageGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const itemData = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const trackRef = useRef();

  useEffect(() => {
    const track = trackRef.current;

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = '0';
      track.dataset.prevPercentage = track.dataset.percentage;
    };
    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === '0') return;
    
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;
    
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      );
    
      track.dataset.percentage = nextPercentage;
    
      track.style.transition = 'transform 1s ease'; // Add this line to adjust the transition duration
      track.style.transform = `translate(${nextPercentage}%, -50%)`;
    
      for (const image of track.getElementsByClassName('image')) {
        image.style.transition = 'object-position 1s ease'; // Add this line to adjust the transition duration
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, []);

  return (
    <div>
      <h1>My Gallery</h1>
      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        {itemData.map((imageUrl, index) => (
          <img
            key={index}
            className="image"
            src={imageUrl}
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
}
