import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerLinks = [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Shop', to: '/shop' },
        { text: 'Blogs', to: '/blog' },
        { text: 'Contact', to: '/contact' }
    ];

    const helpInfo = [
        'Track Your Order',
        'Returns policies',
        'Shipping + Delivery',
        'Contact Us',
        'Faqs'
    ];

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                    <Typography variant='h4' color='gray'><b>Shop</b>Lite</Typography>
                    <Typography mt={2}>
                        Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2, color: 'gray', justifyContent: 'start' }}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <YouTubeIcon />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'center' }, color: 'gray' }}>
                    <Typography variant='h4' color='gray'>Quick links</Typography>
                    {footerLinks.map((link, index) => (
                        <MuiLink component={Link} to={link.to} key={index} sx={{ textDecoration: 'none' }}>
                            <Typography mt={1}>{link.text}</Typography>
                        </MuiLink>
                    ))}
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'center' }, color: 'gray' }}>
                    <Typography variant='h4' color='gray'>Help & info</Typography>
                    {helpInfo.map((info, index) => (
                        <Typography key={index} mt={1} color='gray'>{info}</Typography>
                    ))}
                </Grid>

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                    <Typography variant='h4' color='gray'>Contact us</Typography>
                    <Typography mt={1} color='gray'>
                        Do you have any queries or suggestions? yourinfo@gmail.com
                    </Typography>
                    <Typography mt={2} color='gray'>
                        If you need support? Just give us a call. +55 111 222 333 44
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
