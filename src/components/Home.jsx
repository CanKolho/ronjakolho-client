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
    <Divider sx={{ marginLeft: '4rem', marginRight: '4rem', marginTop: 15, marginBottom: 10}} />
    <ImageGallery />
    <Footer />
    </>
      
  )
}

export default Home