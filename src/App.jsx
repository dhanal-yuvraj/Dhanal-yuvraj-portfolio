import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/education"  element={<Education />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/skills"     element={<Skills />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}