import React from 'react'
import { Blogmain } from '../components/BlogContainer/Blogmain'
import Bloghero from '../components/BlogContainer/Bloghero'
import Customer from '../components/HomeContainer/Customer'
import LatestPost from '../components/HomeContainer/LatestPost'
import Logo from '../components/HomeContainer/Logo'
import Instagarm from '../components/HomeContainer/Instagram'

const Blog = () => {
    return (
        <div>
            <Blogmain />
            <Bloghero />
            <Customer />
            <LatestPost />
            <Logo />
            <Instagarm />
        </div>
    )
}

export default Blog