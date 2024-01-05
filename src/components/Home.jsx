import ImageGallery from './ImageGallery'
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material'
import Box from '@mui/material/Box';
import Motion from './motion/Motion.jsx'

const Home = () => { 
  return (
    <>
      <Motion index={1} direction='down'>
        <Typography variant="h3" align="center" mb={2} mt={30} sx=  {{fontFamily: 'CalligraphyFont'}}>
          Ronja Kolho
        </Typography>
      </Motion>
      <Motion index={2} direction='down'>
        <Typography variant="h5" align="center" mb={2} mt={1}>
          Portfolio
        </Typography>
      </Motion>
      <Motion index={3} direction='down'>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Divider sx={{ mx: '4rem', mt: 12, mb: 10, width: '75vw' }} />
        </Box>
      </Motion>
      <ImageGallery />
      <Footer />
    </>
  )
}

export default Home