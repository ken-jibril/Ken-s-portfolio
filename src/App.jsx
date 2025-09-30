import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
       <Navbar />
       

       <div className="flex-grow">
        <Routes>
          <Route   path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/project' element={<Projects />} />
          <Route  path='/contact' element={<Contact />} />
        </Routes>
       </div>

       <Footer />
      </BrowserRouter>  
    </div>
    </>
  )
}

export default App
