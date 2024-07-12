import React from 'react'
import Iphone from '../components/ProductContainer/Iphone'
import Productdescription from '../components/ProductContainer/Productdescription'
import Review from '../components/ProductContainer/Review'
import Related from '../components/ProductContainer/Related'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagram from '../components/HomeContainer/Instagram'

const ProductPage = () => {
    return (
        <>
            <Iphone />
            <Productdescription />
            <Review />
            <Related />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagram />
        </>
    )
}

export default ProductPage