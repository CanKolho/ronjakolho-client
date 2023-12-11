import Navigation from "./components/Navigation"
import Home from "./components/Home"
import ContactForm from "./components/ContactForm"
import { Routes, Route } from 'react-router-dom'
import '@fontsource/roboto/300.css';

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
