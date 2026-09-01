import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Services from '../component/Services'
import About from '../component/About'
import Testimonials from '../component/Testimonials'
import BookingForm from '../component/BookingForm'
import Footer from '../component/Footer'
import Doctors from '../component/DoctorCard'
import axios from 'axios'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Services/>
       <About/>
       <Testimonials/>
       <Doctors/>
       <BookingForm/>
       <Footer/>
    </div>
  )
}

export default Home
