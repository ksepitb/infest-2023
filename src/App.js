import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import CSS
import './App.css'

// import pages
import Home from './pages/Home.jsx'
import MainEvent from './pages/MainEvent.jsx'
import Equity from './pages/Equity.jsx'
import BCC from './pages/BCC.jsx'
import Temporary from './pages/Temporary';

// import componentd
import Navbar from './components/Home/Navbar/Navbar'
import Footer from './components/Home/Footer/Footer';

// import aos  (animate on scoll)
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,

    })
  })

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Main-Event' element={<MainEvent />}/>
          <Route path='/Equity-Research-Competition' element={<Equity />} />
          <Route path='/Business-Case-Competition' element={<BCC />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App