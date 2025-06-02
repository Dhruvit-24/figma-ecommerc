import React from 'react'
import BlogPostimg from '../components/BlogPostContainer/BlogPostimg'
import BlogPostsection2 from '../components/BlogPostContainer/BlogPostsection2'
import Relatedpoost from '../components/BlogPostContainer/Relatedpost'
import Customer from '../components/HomeContainer/Customer'
import Logo from '../components/HomeContainer/Logo'
import Instagram from '../components/HomeContainer/Instagram'

const BlogPost = () => {
    return (
        <div>
            <BlogPostimg />
            <BlogPostsection2 />
            <Relatedpoost />
            <Customer />
            <Logo />
            <Instagram />
        </div>
    )
}

export default BlogPost