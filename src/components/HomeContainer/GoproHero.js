import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import cam from '../../assets/firstsec.png';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SwipeableViews from 'react-swipeable-views';

const GoproHero = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [activeStep, setActiveStep] = useState(0);

    const data = [
        {
            icon: <LocalGroceryStoreOutlinedIcon />,
            title: 'Free Delivery',
            desc: 'Consectetur adipi elit lorem ipsum dolor sit amet.'
        },
        {
            icon: <EmojiEventsOutlinedIcon />,
            title: 'Quality guarantee',
            desc: 'Dolor sit amet orem ipsu mcons ectetur adipi elit.'
        },
        {
            icon: <LocalOfferOutlinedIcon />,
            title: 'Daily offers',
            desc: 'Amet consectetur adipi elit loreme ipsum dolor sit.'
        },
        {
            icon: <CheckCircleOutlineOutlinedIcon />,
            title: '100% secure payment',
            desc: 'Rem Lopsum dolor sit amet, consectetur adipi elit.'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % data.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [data.length]);

    return (
        <>
            <Grid container display='flex' justifyContent='center' bgcolor='transparent'>
                <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography textAlign='center' variant='h2'>GoPro hero9 Black</Typography>
                    <Typography textAlign='start'>Limited stocks available. Grab it now</Typography>
                    <Button sx={{ bgcolor: 'orange', borderRadius: '50px', color: 'white', mt: 3, width: '50%', textAlign: 'center' }}>Shop Collection</Button>
                </Grid>
                <Grid item md={6}>
                    <img src={cam} style={{ height: '100%', width: '100%' }} alt="camera" />
                </Grid>
            </Grid>

            {isMobile ? (
                <SwipeableViews index={activeStep} onChangeIndex={(index) => setActiveStep(index)}>
                    {data.map((item, index) => (
                        <Grid container key={index} justifyContent='center' sx={{ mt: 4 }}>
                            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                                    <Box sx={{ fontSize: 40, mr: 1, color: 'orange' }}>{item.icon}</Box>
                                    <Typography variant='h6'>{item.title}</Typography>
                                </Box>
                                <Typography>{item.desc}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </SwipeableViews>
            ) : (
                <Grid container spacing={2} justifyContent='center' sx={{ mt: 4 }}>
                    {data.map((item, index) => (
                        <Grid item xs={12} md={3} key={index} sx={{ textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                                <Box sx={{ fontSize: 40, mr: 1, color: 'orange' }}>{item.icon}</Box>
                                <Typography variant='h6'>{item.title}</Typography>
                            </Box>
                            <Typography>{item.desc}</Typography>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default GoproHero;
