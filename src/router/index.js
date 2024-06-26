import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop'
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout';
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/productpage',
                element: <ProductPage />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blogpost',
                element: <BlogPost />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default router;