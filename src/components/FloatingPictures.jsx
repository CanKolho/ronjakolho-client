import'../styles/FloatingPictures.css'
import img1 from '/img1.png.webp'
import img2 from '/img2.jpg.webp'
import img3 from '/img3.png.webp'
import img4 from '/img4.png.webp'
import { numberRange } from '../utils/helpers'

const FloatingPictures = () => {
  const images = [img1, img2, img3, img4]
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