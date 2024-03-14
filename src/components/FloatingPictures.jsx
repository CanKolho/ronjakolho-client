import img1 from '../assets/weddings/IMG_9176.jpg'
import img2 from '../assets/weddings/IMG_9326-2.jpg'
import img3 from '../assets/drinks/moneypenny.jpg'
import img4 from '../assets/weddings/IMG_9295.jpg'
import img5 from '../assets/weddings/IMG_9352.jpg'
import img6 from '../assets/drinks/maitai3.jpg'
import img7 from '../assets/hannes.jpg'
import img8 from '../assets/drinks/karibia_2.jpg'
import'../styles/FloatingPictures.css'

const FloatingPictures = () => {  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8]

  return (
    <div className="pictures">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="random" />
        </div>
      ))}
    </div>
  )
}

export default FloatingPictures