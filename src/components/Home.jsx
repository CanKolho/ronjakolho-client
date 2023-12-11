import ImageGallery from './ImageGallery'
import { Divider } from '@mui/material'

const Home = () => { 
  return (
    <>
    <Divider sx={{ marginLeft: '4rem', marginRight: '4rem', marginTop: 15, marginBottom: 5}} />
    <ImageGallery />
    </>
      
  )
}

export default Home