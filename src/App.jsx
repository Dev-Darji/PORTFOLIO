import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Footer from './components/Footer'




const App = () => {
  return (
   <div className='App'>
    <Navbar/>
    <Banner/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contact/>
    {/* <Footer/> */}
   </div>
  )
}

export default App
