import React from 'react'
import './Home.css'
import Hero from './hero/Hero'
import About from './about/About'
import Proj from './projects/Proj'
import Contact from './contact/Contact'

function Home() {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Proj/>
      <Contact/>
    </div>
  )
}

export default Home
