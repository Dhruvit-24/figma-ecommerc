import React from 'react'
import GoproHero from '../components/HomeContainer/GoproHero'
import CategoryBestsell from '../components/HomeContainer/CategoryBestsell'
import Discount from '../components/HomeContainer/Discount'
import FeaturedLatest from '../components/HomeContainer/FeaturedLatest'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagram from '../components/HomeContainer/Instagram'


const Home = () => {
    return (
        <>
            {/* section */}
            <GoproHero />
            <CategoryBestsell />
            <Discount />
            <FeaturedLatest />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagram />
        </>
    )
}

export default Home