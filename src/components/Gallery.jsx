import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useInView } from 'react-intersection-observer';
import { Card, CardMedia } from '@mui/material';
import '../components/Gallery.css';
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

export default function StandardImageList() {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <div className="gallery">
      <ImageList className="pics" cols={4} gap={16}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <Card>
              {inView || index < 4 ? ( 
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={inView ? item.img : undefined}
                  ref={index === 3 ? ref : null} 
                />
              ) : (
             
                <div style={{ height: '100%', width: '100%' }}></div>
              )}
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Img 1',
  },
  {
    img: img2,
    title: 'Img 2',
  },
  {
    img: img3,
    title: 'Img 3',
  },
  {
    img: img4,
    title: 'Img 4',
  },
  {
    img: img5,
    title: 'Img 5',
  },{
    img: img6,
    title: 'Img 6',
  },{
    img: img7,
    title: 'Img 7'
  },{
    img: img8,
    title: 'Img 8'
  },
  {
    img: img9,
    title: 'Img 9'
  },
  {
    img: img10,
    title: 'Img 10'
  },
{
  img: img11,
  title: 'Img 11'
},{
  img: img12,
  title:'Img 12'
}
];
