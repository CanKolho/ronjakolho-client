import'../styles/FloatingPictures.css'
import img from '../assets/me.jpeg'

import { numberRange } from '../utils/helpers'

const FloatingPictures = () => {
  const images = []
  const range = numberRange(0, 8)
  
  return (
    <div className="pictures">
      {range.map((number) => (
        <div key={number + images[number % images.length]}>
        {
          //<img src={images[number % images.length]} alt="random" />
        }
          <img src={img} alt="random" />  
        </div>
      ))}
    </div>
  )
}

export default FloatingPictures