import React from 'react'
import ShopMain from '../components/ShopContainer/ShopMain'
import ShopHero from '../components/ShopContainer/ShopHero'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagram from '../components/HomeContainer/Instagram'

const Shop = () => {
    return (
        <>
            {/* Shop Section */}
            <ShopMain />
            <ShopHero />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagram />
        </>
    )
}

export default Shop