import { useEffect, Suspense, lazy } from "react"

import Navigation from "./components/Navigation"
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const References = lazy(() => import('./components/References'));
const Reference = lazy(() => import('./components/Reference'));
const ContactForm = lazy(() => import('./components/ContactForm'));
import CircularLoading from './components/loading/CircularLoading.jsx'

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
      <Suspense fallback={<CircularLoading />} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<References />} />
          <Route path='/portfolio/:id' element={<Reference reference={reference} />}/>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
