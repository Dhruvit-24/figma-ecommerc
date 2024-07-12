import React from 'react'
import phon from '../../assets/phon.png';
import play from '../../assets/playsta.png';
import clock from '../../assets/watch.png';
import joy from '../../assets/joystck.png';
import ear from '../../assets/earpods.png';
import laptop from '../../assets/laptop.png';
import { Card, CardContent, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Related = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const imgdata1 = [
        { img: phon, title: 'Phones' },
        { img: play, title: 'Play Station' },
        { img: joy, title: 'Digital Watches' },
        { img: clock, title: 'Joysticks' },
        { img: ear, title: 'EarPods' },
        { img: laptop, title: 'Laptops' },
        // { img: laptop, title: 'Laptops' },
        // { img: laptop, title: 'Laptops' }
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
        <>
            <Container>
                <Typography variant='h5' color='gray' mt={5} gutterBottom>Related items</Typography>
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
            </Container>
        </>
    )
}

export default Related