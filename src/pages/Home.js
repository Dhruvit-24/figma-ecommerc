import React from 'react'
import GoproHero from '../components/HomeContainer/GoproHero'
import CategoryBestsell from '../components/HomeContainer/CategoryBestsell'
import Discount from '../components/HomeContainer/Discount'
import FeaturedLatest from '../components/HomeContainer/FeaturedLatest'

const Home = () => {
    return (
        <>
            {/* section */}
            <GoproHero />
            <CategoryBestsell />
            <Discount />
            <FeaturedLatest />
        </>
    )
}

export default Home