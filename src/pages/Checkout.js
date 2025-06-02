import React from 'react'
import CheckoutMain from '../components/CheckoutContainer/CheckoutMain'
import Form from '../components/CheckoutContainer/Form'
import CheckoutCart from '../components/CheckoutContainer/CheckoutCart'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagarm from '../components/HomeContainer/Instagram'

const Checkout = () => {
    return (
        <>
            <CheckoutMain />
            <Form />
            <CheckoutCart />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagarm />
        </>
    )
}

export default Checkout