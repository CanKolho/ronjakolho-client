import'../styles/FloatingPictures.css'
import img1 from '../assets/grilli.jpg'
import img2 from '../assets/hannes.jpg'
import img3 from '../assets/img2.jpg'
import img4 from '../assets/img3.jpg'
import img5 from '../assets/perhe.jpg'
import img6 from '../assets/salzburg.jpg'

import { numberRange } from '../utils/helpers'

const FloatingPictures = () => {
  const images = [img1, img2, img3, img4, img5, img6]
  const range = numberRange(0, 8)
  
  return (
    <div className="pictures">
      {range.map((number) => (
        <div key={number + images[number % images.length]}>
          <img src={images[number % images.length]} alt="random" />
        </div>
      ))}
    </div>
  )
}

export default FloatingPictures