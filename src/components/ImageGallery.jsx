import img1 from '../assets/weddings/IMG_9176.jpg'
import img2 from '../assets/weddings/IMG_9326-2.jpg'
import img3 from '../assets/drinks/moneypenny.jpg'
import img4 from '../assets/weddings/IMG_9295.jpg'
import img5 from '../assets/weddings/IMG_9352.jpg'
import img6 from '../assets/drinks/mojito_1.jpg'
import '../styles/ImageGallery.css'

import { useMediaQuery } from '@mui/material';
import Motion from './motion/motion.jsx'

const ImageGallery = () => {
  const isMobile = useMediaQuery('(max-width: 900px)')

  return (
    <>
    <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='pics' key={index} >
              <Motion
                index={ isMobile ? 0 : index}
              >
                <img 
                  src={item.imgSrc} 
                  alt={item.altText} 
                  style={{ width: '100%' }}
                />
              </Motion>
            </div>
          );
        })}
    </div>
    </>
  )
}
 
export default ImageGallery;

const data = [
    {
      id: 1,
      imgSrc: img1,
      altText: 'Image 1'
    },
    {
      id: 2,
      imgSrc: img2,
      altText: 'Image 2'
    },
    {
      id: 3,
      imgSrc: img3,
      altText: 'Image 3'
    },
    {
      id: 4,
      imgSrc: img4,
      altText: 'Image 4'
    },
    {
      id: 5,
      imgSrc: img5,
      altText: 'Image 5'
    },
    {
      id: 6,
      imgSrc: img6,
      altText: 'Image 6'
    },
];