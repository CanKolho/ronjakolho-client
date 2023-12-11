import img1 from '/img1.png.webp'
import img2 from '/img2.jpg.webp'
import img3 from '/img3.png.webp'
import img4 from '/img4.png.webp'
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
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img4
    },
    {
      id: 4,
      imgSrc: img1
    },
    {
      id: 5,
      imgSrc: img3
    },
    {
      id: 6,
      imgSrc: img2
    },
];