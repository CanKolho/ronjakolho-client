/* eslint-disable react/prop-types */
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

/**
 * Renders an image component with lazy loading.
 *
 * @component
 * @param {Object} image - The image object.
 * @param {string} image.src - The source URL of the image.
 * @param {string} image.alt - The alternative text for the image.
 * @param {Object} image.style - The inline styles for the image.
 * @param {string} image.className - The CSS class name for the image.
 * @returns {JSX.Element} The rendered image component.
 */
const MyImage = ({ image, scrollPosition }) => {
  return (
      <LazyLoadImage
      src={image.src}
      alt={image.alt}
      style={image.style}
      className={image.className}
      effect="opacity"
      //effect="blur"

      //placeholderSrc={image.placeholder}

      scrollPosition={scrollPosition}
    />
  )
};

export default MyImage;