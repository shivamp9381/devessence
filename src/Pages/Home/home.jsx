import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'

const Home = () => {
  return (
    <div>
      <Navbar />
      <LoadingAnimation />
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  )
}

export default Home
