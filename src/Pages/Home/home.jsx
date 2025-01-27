import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import PhilosophySection from '../../Components/Philosophy/philosophy'

const Home = () => {
  return (
    <div>
      <LoadingAnimation />      
      <Navbar />
      <PhilosophySection />
      <Footer />
    </div>
  )
}

export default Home
