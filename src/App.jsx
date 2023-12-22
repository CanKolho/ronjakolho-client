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

const App = () => {
  useScrollToTop()

  const match = useMatch('/ronjakolhoportfolio/reference/:id')
  const reference = match 
    ? portfolio.find(p => p.id === Number(match.params.id))
    : null

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="ronjakolhoportfolio/" element={<Home />} />
        <Route path="ronjakolhoportfolio/about" element={<About />} />
        <Route path="ronjakolhoportfolio/references" element={<References />} />
        <Route path='/ronjakolhoportfolio/reference/:id' element={<Reference reference={reference} />}/>
        <Route path="ronjakolhoportfolio/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
