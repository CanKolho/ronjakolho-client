import ImageGallery from './ImageGallery'
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material'
import { Motion } from './motion/Motion'

const Home = () => { 
  return (
    <>
      <Motion>
        <Typography variant="h3" align="center" mb={2} mt={30} sx=  {{fontFamily: 'CalligraphyFont'}}>
          Ronja Kolho
        </Typography>
      </Motion>
      <Motion>
        <Typography variant="h5" align="center" mb={2} mt={1}>
          Portfolio
        </Typography>
      </Motion>
      <Motion>
        <Divider sx={{ mx: '4rem', mt: 12, mb: 10, width: '75vw' }} />
      </Motion>
      <ImageGallery />
      <Footer />
    </>
  )
}

export default Home