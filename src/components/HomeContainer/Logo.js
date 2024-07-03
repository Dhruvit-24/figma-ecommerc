import React from 'react';
import { Container, Grid, Box, Divider } from '@mui/material';
import one from '../../assets/techlight.png';
import two from '../../assets/MiniStore..png';
import three from '../../assets/Ultras.png';
import four from '../../assets/Swanky.png';
import five from '../../assets/Emily.png';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Logo = () => {
    const logodata = [one, two, three, four, five];
    const isMobile = window.innerWidth < 600; // Check if screen width is less than 600px

    return (
        <>
            <Divider sx={{ width: '100%', mt: 5 }} />
            <Container sx={{ mt: 5, display: 'flex', justifyContent: 'center' }} >
                {isMobile ? (
                    <AutoPlaySwipeableViews interval={3000} enableMouseEvents>
                        {logodata.map((logo, index) => (
                            <Box key={index} sx={{ textAlign: 'center', p: 2 }}>
                                <img src={logo} alt={`Logo ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Box>
                        ))}
                    </AutoPlaySwipeableViews>
                ) : (
                    <Grid container spacing={5} justifyContent='center'>
                        {logodata.map((logo, index) => (
                            <Grid item xs={2} key={index}>
                                <Box textAlign="center">
                                    <img src={logo} alt={`Logo ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
            <Divider sx={{ width: '100%', mt: 3 }} />
        </>
    );
};

export default Logo;
