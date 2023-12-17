import ImageGallery from './ImageGallery'
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material'

const Home = () => { 
  return (
    <>
    <Typography variant="h3" align="center" mb={2} mt={30} sx={{fontFamily: 'CalligraphyFont'}}>
      Ronja Kolho
    </Typography>
    <Typography variant="h5" align="center" mb={2} mt={1}>
      Portfolio
    </Typography>
    <Divider sx={{ mx: '4rem', mt: 15, mb: 10 }} />
    <ImageGallery />
    <Footer />
    </>
      
  )
}

export default Home