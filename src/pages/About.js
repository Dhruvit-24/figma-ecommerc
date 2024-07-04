import React from 'react'
import Main from '../components/AboutContainer/Main'
import Freedelivery from '../components/HomeContainer/Freedelivery'
import Hero from '../components/AboutContainer/Hero'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagram from '../components/HomeContainer/Instagram'

const About = () => {
    return (
        <>
            {/* About Section */}
            <Main />
            <Freedelivery />
            <Hero />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagram />
        </>
    )
}

export default About