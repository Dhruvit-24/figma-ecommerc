import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SearchIcon from '@mui/icons-material/Search';
import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop3.png';
import shop4 from '../../assets/shop4.png';
import shop5 from '../../assets/shop5.png';
import shop6 from '../../assets/shop6.png';
import shop7 from '../../assets/shop7.png';
import shop8 from '../../assets/shop8.png';
import shop9 from '../../assets/shop9.png';
import shop10 from '../../assets/shop10.png';
import shop11 from '../../assets/shop11.png';
import shop12 from '../../assets/shop12.png';

const ShopHero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const imgdata = [
        { img: shop1, title: 'IPad (9th Gen)', price: '$870' },
        { img: shop2, title: 'Drone With Camera', price: '$600' },
        { img: shop3, title: 'Apple Watch (2nd Gen)', price: '$400' },
        { img: shop4, title: 'Ultra HD TV', price: '$2000' },
        { img: shop5, title: 'Drone With Camera', price: '$600' },
        { img: shop6, title: 'Apple Watch (2nd Gen)', price: '$400' },
        { img: shop7, title: 'Ultra HD TV', price: '$2000' },
        { img: shop8, title: 'Bluetooth Speaker', price: '$70' },
        { img: shop9, title: 'Drone With Camera', price: '$870' },
        { img: shop10, title: 'Apple Watch (2nd Gen)', price: '$870' },
        { img: shop11, title: 'Ultra HD TV', price: '$870' },
        { img: shop12, title: 'Bluetooth Speaker', price: '$870' }
    ];

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={9}>
                    {isSmallScreen ? (
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                        >
                            {imgdata.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '100%', height: 'auto', maxHeight: 300, objectFit: 'contain' }}
                                            image={item.img}
                                            alt={item.title}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="orange">
                                                Price: {item.price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Grid container spacing={4}>
                            {imgdata.map((item, index) => (
                                <Grid item key={index} md={4} sm={6} xs={12}>
                                    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 200, objectFit: 'contain', margin: 'auto' }}
                                            image={item.img}
                                            alt={item.title}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography gap={5} variant="body2" color="orange">
                                                Price: {item.price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField fullWidth placeholder='Search' InputProps={{
                        endAdornment: (
                            <InputAdornment position='end' >
                                <SearchIcon sx={{ bgcolor: 'orange', borderRadius: '50px' }} />
                            </InputAdornment>
                        )
                    }} />
                    {['Categories', 'Tags', 'Brands', 'Filter By Price'].map((section, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mt: 3, gap: 1 }}>
                            <Typography variant='h4' color='gray'>{section}</Typography>
                            <Divider />
                            {section === 'Filter By Price' ? (
                                <>
                                    <Typography>Less than $10</Typography>
                                    <Typography>$10 - $20</Typography>
                                    <Typography>$20 - $30</Typography>
                                    <Typography>$30 - $40</Typography>
                                    <Typography>$40 - $450</Typography>
                                </>
                            ) : (
                                <>
                                    <Typography>All</Typography>
                                    <Typography>Phones</Typography>
                                    <Typography>Accessories</Typography>
                                    <Typography>Tablets</Typography>
                                    <Typography>Watches</Typography>
                                </>
                            )}
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShopHero;
