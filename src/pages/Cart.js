import React from 'react'
import CartMain from '../components/CartContainer/CartMain'
import CartProduct from '../components/CartContainer/CartProduct'
import CartTotal from '../components/CartContainer/CartTotal'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagarm from '../components/HomeContainer/Instagram'

const Cart = () => {
    return (
        <>
            <CartMain />
            <CartProduct />
            <CartTotal />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagarm />
        </>
    )
}

export default Cart