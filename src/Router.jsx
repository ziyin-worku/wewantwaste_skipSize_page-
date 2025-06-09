import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SkipSize from './Components/SkipSize/SkipSize'   
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'  
import ContactUs from './Components/Contact/Contact'


function Routing() {
  return (
    <div>
        
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skipsize" element={<SkipSize />} />
        <Route path="/aboutus" element={<WhyChooseUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  
        
        </div>
  )
}

export default Routing