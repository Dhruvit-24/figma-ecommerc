import { Container, Divider, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import dhl from '../assets/dhl.png';
import action from '../assets/action.png';
import visa from '../assets/visa.png';
import master from '../assets/mastercard.png';
import paypal from '../assets/paypal.png';

const LastFooter = () => {
    const imageStyle = { width: 'auto', height: 'auto', maxHeight: 40 };
    const boxStyle = { display: 'flex', alignItems: 'center', gap: 3 };

    return (
        <>
            <Divider sx={{ width: '100%', mt: 2 }} />
            <Container sx={{ mt: 3, mb: 3 }}>
                <Grid container spacing={3}>
                    <Grid item md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={boxStyle}>
                            <Typography noWrap>We ship with:</Typography>
                            <img src={dhl} alt="dhl" style={imageStyle} />
                            <img src={action} alt="action" style={imageStyle} />
                        </Box>
                    </Grid>
                    <Grid item md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={boxStyle}>
                            <Typography noWrap>Payment options:</Typography>
                            <img src={visa} alt="visa" style={imageStyle} />
                            <img src={master} alt="mastercard" style={imageStyle} />
                            <img src={paypal} alt="paypal" style={imageStyle} />
                        </Box>
                    </Grid>
                    <Grid item md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ width: '100%' }}>© Copyright 2024 ShopLite. Design by TemplatesJungle</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default LastFooter;
