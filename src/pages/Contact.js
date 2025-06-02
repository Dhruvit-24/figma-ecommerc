import React from 'react'
import Contactheader from '../components/ContactContainer/Contactheader'
import Contactinfo from '../components/ContactContainer/Contactinfo'
import Ourstore from '../components/ContactContainer/Ourstore'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagram from '../components/HomeContainer/Instagram'

const Contact = () => {
    return (
        <div>
            <Contactheader />
            <Contactinfo />
            <Ourstore />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagram />
        </div>
    )
}

export default Contact