import React from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Testimonial from './pages/Testimonial'
import Message from './pages/Message'
import Footer from './pages/Footer'

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Message/>
      <Footer/>
    </>
  )
}

export default App;
