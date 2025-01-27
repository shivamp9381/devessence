import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import PhilosophySection from '../../Components/Philosophy/philosophy'
import HeroBanner from '../../Components/Banner/banner'
import ServiceComponent from '../../Components/ServiceComponent/servicecomponent'
import Testimonials from '../../Components/Testimonials/testimonial'
import OurProcess from '../../Components/Process/process'
import FAQs from '../../Components/FAQs/faqs'
import Vision from '../../Components/Vision/vision'
import SocialIcons from '../../Components/Socials/socials'

const Home = () => {
  return (
    <div>
      <LoadingAnimation />      
      <Navbar />
      <HeroBanner />
      <PhilosophySection />
      <ServiceComponent />
      <Vision />
      <OurProcess />
      <Testimonials />
      <FAQs />
      <SocialIcons />
      <Footer />
    </div>
  )
}

export default Home
