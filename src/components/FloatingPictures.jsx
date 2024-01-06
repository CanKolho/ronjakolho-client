import'../styles/FloatingPictures.css'
import img1 from '../assets/weddings/IMG_9176.jpg'
import img2 from '../assets/weddings/IMG_9326-2.jpg'
import img3 from '../assets/drinks/moneypenny.jpg'
import img4 from '../assets/weddings/IMG_9295.jpg'
import img5 from '../assets/weddings/IMG_9352.jpg'
import img6 from '../assets/drinks/maitai3.jpg'

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