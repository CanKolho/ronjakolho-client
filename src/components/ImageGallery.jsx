import img1 from '../assets/grilli.jpg'
import img2 from '../assets/hannes.jpg'
import img3 from '../assets/img2.jpg'
import img4 from '../assets/img3.jpg'
import img5 from '../assets/perhe.jpg'
import img6 from '../assets/salzburg.jpg'
import '../styles/ImageGallery.css'

import { MotionDown } from './motion/motionDown'

const ImageGallery = () => {
  return (
    <>
    <div className='gallery'>
        {data.map((item, index) => {
          return (
            <MotionDown key={item + index}>
              <div className='pics' key={index} >
                <img src={item.imgSrc} alt='random' style={{ width: '100%' }} />
              </div>
            </MotionDown>
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
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img3
    },
    {
      id: 4,
      imgSrc: img4
    },
    {
      id: 5,
      imgSrc: img5
    },
    {
      id: 6,
      imgSrc: img6
    },
];