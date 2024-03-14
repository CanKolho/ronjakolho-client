import { lazy } from "react"
const ImageGallery = lazy(() => import('./ImageGallery'));
const Footer = lazy(() => import('./Footer'));

const Home = () => {
  return (
    <>
      <ImageGallery />
      <Footer />
    </>
  )
}

export default Home