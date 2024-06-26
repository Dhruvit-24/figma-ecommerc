import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Product-page', path: '/productpage' },
    { name: 'Cart', path: '/cart' },
    { name: 'Checkout', path: '/checkout' },
    { name: 'Blog', path: '/blog' },
    { name: 'Blog-Post', path: '/blogpost' },
    { name: 'Contact', path: '/contact' },
];

function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [iconsDrawerOpen, setIconsDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleIconsDrawerOpen = () => {
        setIconsDrawerOpen(true);
    };

    const handleIconsDrawerClose = () => {
        setIconsDrawerOpen(false);
    };

    return (

        <Container>
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <strong>SHOP</strong> LITE
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleDrawerOpen}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                        >
                            <List>
                                {pages.map((page) => (
                                    <ListItem key={page.name} disablePadding>
                                        <ListItemButton component={Link} to={page.path}>
                                            <ListItemText primary={page.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <strong>SHOP</strong> LITE
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            component={Link}
                            to={page.path}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                    <SearchIcon />
                    <PersonIcon />
                    <FavoriteIcon />
                    <LocalGroceryStoreIcon />
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="icons menu"
                        aria-controls="icons-menu-appbar"
                        aria-haspopup="true"
                        onClick={handleIconsDrawerOpen}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={iconsDrawerOpen}
                        onClose={handleIconsDrawerClose}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={handleIconsDrawerClose}
                            onKeyDown={handleIconsDrawerClose}
                        >
                            <List>
                                {[
                                    { icon: <SearchIcon />, text: 'Search' },
                                    { icon: <PersonIcon />, text: 'Account' },
                                    { icon: <FavoriteIcon />, text: 'Favorites' },
                                    { icon: <LocalGroceryStoreIcon />, text: 'Cart' },
                                ].map((item, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton>
                                            {item.icon}
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
            </Toolbar>

            {/* Define routes here
            <Routes>
                <Route exact path="/" element={<div>Home Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/shop" element={<div>Shop Page</div>} />
                <Route path="/product-page" element={<div>Product Page</div>} />
                <Route path="/cart" element={<div>Cart Page</div>} />
                <Route path="/checkout" element={<div>Checkout Page</div>} />
                <Route path="/blog" element={<div>Blog Page</div>} />
                <Route path="/blog-post" element={<div>Blog Post Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes> */}
        </Container>

    );
}

export default Navbar;
