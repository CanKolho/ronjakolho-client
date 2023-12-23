import img from '../assets/me.jpeg'
import '../styles/ImageGallery.css'

const ImageGallery = () => {
  return (
    <>
    <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='pics' key={index} >
              <img src={item.imgSrc} alt='random' style={{ width: '100%' }} />
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
      imgSrc: img
    },
    {
      id: 2,
      imgSrc: img
    },
    {
      id: 3,
      imgSrc: img
    },
    {
      id: 4,
      imgSrc: img
    },
    {
      id: 5,
      imgSrc: img
    },
    {
      id: 6,
      imgSrc: img
    },
];