import img1 from '../assets/weddings/IMG_9176.jpg'
import img2 from '../assets/weddings/IMG_9326-2.jpg'
import img3 from '../assets/drinks/moneypenny.jpg'
import img4 from '../assets/weddings/IMG_9295.jpg'
import img5 from '../assets/weddings/IMG_9352.jpg'
import img6 from '../assets/drinks/mojito_1.jpg'

import img1_ph from '../assets/placeholders/IMG_9176_ph.jpg'
import img2_ph from '../assets/placeholders/IMG_9326-2_ph.jpg'
import img3_ph from '../assets/placeholders/moneypenny_ph.jpg'
import img4_ph from '../assets/placeholders/IMG_9295_ph.jpg'
import img5_ph from '../assets/placeholders/IMG_9352_ph.jpg'
import img6_ph from '../assets/placeholders/mojito_1_ph.jpg'

import '../styles/ImageGallery.css'

import MyImage from './LazyLoad/MyImage.jsx'

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
                <MyImage image={{
                  src: item.imgSrc,
                  alt: item.altText,
                  placeholder: item.placeholderSrc,
                  style: {width: '100%'},
                  }}
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
      altText: 'Image 1',
      placeholderSrc: img1_ph
    },
    {
      id: 2,
      imgSrc: img2,
      altText: 'Image 2',
      placeholderSrc: img2_ph
    },
    {
      id: 3,
      imgSrc: img3,
      altText: 'Image 3',
      placeholderSrc: img3_ph
    },
    {
      id: 4,
      imgSrc: img4,
      altText: 'Image 4',
      placeholderSrc: img4_ph
    },
    {
      id: 5,
      imgSrc: img5,
      altText: 'Image 5',
      placeholderSrc: img5_ph
    },
    {
      id: 6,
      imgSrc: img6,
      altText: 'Image 6',
      placeholderSrc: img6_ph
    },
];