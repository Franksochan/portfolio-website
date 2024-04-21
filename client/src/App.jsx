import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./pages/homepage/header"
import { Nav } from "./components/nav"
import { Project } from './pages/projects/projects'
import { About } from './pages/about/about'
import { Contact } from './pages/contact/contact'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App