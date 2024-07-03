import React from 'react';
import { Container, Typography, Card, CardContent, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import phon from '../../assets/phon.png';
import play from '../../assets/playsta.png';
import clock from '../../assets/watch.png';
import joy from '../../assets/joystck.png';
import ear from '../../assets/earpods.png';
import laptop from '../../assets/laptop.png';
import ipad from '../../assets/ipad.png';
import dron from '../../assets/dron.png';
import apple from '../../assets/applewatch.png';
import uhd from '../../assets/uhdtv.png';
import bluetooth from '../../assets/bluetoothspeaker.png';

const CategoryBestsell = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const imgdata1 = [
        { img: phon, title: 'Phones' },
        { img: play, title: 'Play Station' },
        { img: joy, title: 'Digital Watches' },
        { img: clock, title: 'Joysticks' },
        { img: ear, title: 'EarPods' },
        { img: laptop, title: 'Laptops' }
    ];

    const imgdata2 = [
        { img: ipad, title: 'iPad(9th Gen)', price: '$870' },
        { img: dron, title: 'Dron With Camera', price: '$600' },
        { img: apple, title: 'Apple Watch(2ndGen)', price: '$400' },
        { img: uhd, title: 'Ultra HD Tv', price: '$2000' },
        { img: bluetooth, title: 'Bluetooth Speaker ', price: '$70' }
    ];

    const swiperParams = {
        spaceBetween: 10,
        slidesPerView: isSmallScreen ? 1 : 3,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant='h5' color='gray' mt={5} gutterBottom>Categories</Typography>
            <Swiper {...swiperParams}>
                {imgdata1.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <CardContent>
                                <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', marginBottom: '8px', alignContent: 'center' }} />
                                <Typography>{item.title}</Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Typography variant='h5' color='gray' mt={5} gutterBottom>Best selling items</Typography>
            <Swiper {...swiperParams}>
                {imgdata2.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                            <CardContent>
                                <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', marginBottom: '8px', alignContent: 'center' }} />
                                <Typography>{item.title}</Typography>
                                {item.price && <Typography sx={{ color: 'orange' }}>{item.price}</Typography>}
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default CategoryBestsell;
