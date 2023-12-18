import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import References from "./components/References"
import ContactForm from "./components/ContactForm"
import { Routes, Route } from 'react-router-dom'
import { useScrollToTop } from "./hooks/index"
import '@fontsource/roboto/300.css';

const App = () => {
  useScrollToTop()

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="ronjakolhoportfolio/" element={<Home />} />
        <Route path="ronjakolhoportfolio/about" element={<About />} />
        <Route path="ronjakolhoportfolio/references" element={<References />} />
        <Route path="ronjakolhoportfolio/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
