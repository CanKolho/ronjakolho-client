/* eslint-disable react/prop-types */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const MyImage = ({ image, scrollPosition }) => {
  return (
      <LazyLoadImage
      src={image.src}
      alt={image.alt}
      style={image.style}
      className={image.className}
      effect="opacity"
      scrollPosition={scrollPosition}
    />
  )
};

export default MyImage;
