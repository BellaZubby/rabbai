"use client"
import React from 'react'
import Navbar from './Sections/NavSection/Navbar'
import Hero from './Sections/HeroSection/Hero'
import StorySection from './Sections/StorySection/StorySection'
import Certification from './Sections/CertSection/Certification'
import FeedMain from './Sections/FeedSection/FeedMain'
import HowToSection from './Sections/HowToSection/HowToSection'
import Reviews from './Sections/ReviewsSection/Reviews'
import Sponsors from './Sections/SponsorSection/Sponsors'
import Grid from './Sections/GridSection/Grid'
import Update from './Sections/UpdateSection/Update'
import Footer from './Sections/FooterSection/Footer'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <StorySection/>
        <Certification/>
        <FeedMain/>
        <HowToSection/>
        <Reviews/>
        <Sponsors/>
        <Grid/>
        <Update/>
        <Footer/>
    </div>
  )
}

export default HomePage