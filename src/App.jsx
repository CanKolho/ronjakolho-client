import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import ContactForm from "./components/ContactForm"
import { Routes, Route } from 'react-router-dom'
import '@fontsource/roboto/300.css';

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
