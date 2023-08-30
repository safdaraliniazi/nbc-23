import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Schedule from '../components/Schedule'
import Ticket from '../components/Ticket' 
import Footer from '../components/Footer'
import Organising from '../components/Organising'
import Marquee from '../components/Marquee'
import Theme from '../components/Theme'
import AboutNBC from '../components/AboutNBC'
import EventTimer from '../components/EventTimer'
import Carousel from '../components/Carousel'
import ImportantDates from '../components/ImportantDates'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Marquee />
    <EventTimer />
    <AboutNBC />
    <Carousel />
    <Theme />
    <ImportantDates />
    <Organising />
    <Schedule />
    <Ticket />
    <Footer />
    </>
  )
}

export default Home