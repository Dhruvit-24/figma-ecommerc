import React from 'react'
import CheckoutMain from '../components/CheckoutContainer/CheckoutMain'
import Form from '../components/CheckoutContainer/Form'
import CheckoutCart from '../components/CheckoutContainer/CheckoutCart'

const Checkout = () => {
    return (
        <>
            <CheckoutMain />
            <Form />
            <CheckoutCart />
        </>
    )
}

export default Checkout