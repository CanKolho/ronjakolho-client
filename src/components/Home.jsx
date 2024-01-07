import ImageGallery from './ImageGallery'
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import Motion from './motion/motion.jsx'
import { useMediaQuery } from '@mui/material';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 990px)');

  return (
    <>
      <Motion index={1} direction='down'>
        <Typography 
          variant={isMobile ? 'h3': 'h2'} 
          align="center" 
          fontWeight={700} 
          mb={12} 
          mt={20} >
            RONJA KOLHO
        </Typography>
      </Motion>
      <ImageGallery />
      <Footer />
    </>
  )
}

export default Home