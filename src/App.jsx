import { useEffect } from "react"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import References from "./components/References"
import Reference from "./components/Reference"
import ContactForm from "./components/ContactForm"
import { Routes, Route, useMatch } from 'react-router-dom'
import { useScrollToTop } from "./hooks/index"
import { portfolio } from "./portfolio"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import emailService from './services/email.js';

const App = () => {
  useScrollToTop()

  useEffect(() => {
    /**
     * Connects to the email service.
     * @returns {Promise<void>} A promise that resolves when the connection is established.
     */
    const connectEmailService = async () => {
      const connected = await emailService.connect();
      console.log(connected);
    }
    connectEmailService();
  }, []);

  const match = useMatch('/portfolio/:id')
  const reference = match 
    ? portfolio.find(p => p.id === Number(match.params.id))
    : null

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<References />} />
        <Route path='/portfolio/:id' element={<Reference reference={reference} />}/>
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
