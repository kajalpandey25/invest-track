import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Insight from '../Components/Insight/Insight'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Resource from '../Components/Resources/Resource'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const Website = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Insight />
      <About />
      <Services />
      <Resource />
      <Blog />
      <Footer />
    </div>
  )
}

export default Website
