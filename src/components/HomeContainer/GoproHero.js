import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import cam from '../../assets/firstsec.png';

const GoproHero = () => {
    return (
        <>
            <Container>
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
            </Container>
        </>
    );
};

export default GoproHero;
