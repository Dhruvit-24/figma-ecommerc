import React from 'react';
import { Container, Typography, Card, CardMedia, Grid, Box } from '@mui/material';

import headset from '../../assets/lheadphon.png';
import xpro from '../../assets/lphon.png';
import iphon from '../../assets/liphon.png';

import airpods from '../../assets/L airpods.png';
import screentouch from '../../assets/L watch.png';
import digiwatch from '../../assets/L digiwatch.png';

import wireless from '../../assets/B joystick.png';
import airpod from '../../assets/B Airpods.png';
import stab from '../../assets/B stabilizer.png';

import iphon15 from '../../assets/O iphon.png';
import airpod1 from '../../assets/O Airpods.png';
import cctv from '../../assets/cctv.png';

const FeaturedLatest = () => {
    const data = [
        {
            category: 'Featured',
            items: [
                { img: headset, desc: 'Wireless Headset', price: '$500' },
                { img: xpro, desc: 'Iphon Xpro Max', price: '$820' },
                { img: iphon, desc: 'Iphon 11pro', price: '$960' }
            ]
        },
        {
            category: 'Latest Item',
            items: [
                { img: airpods, desc: 'Airpods Pro', price: '$450' },
                { img: screentouch, desc: 'Screen Watch', price: '$750' },
                { img: digiwatch, desc: 'Digital Watch', price: '$660' }
            ]
        },
        {
            category: 'Best Review',
            items: [
                { img: wireless, desc: 'Wireless Joystick', price: '$250' },
                { img: airpod, desc: 'Apple AirpodsPro', price: '$450' },
                { img: stab, desc: 'Gimbal Stabilizer', price: '$150' }
            ]
        },
        {
            category: 'On Sale',
            items: [
                { img: iphon15, desc: 'Iphon 15pro', price: '$999' },
                { img: airpod1, desc: 'Apple AirpodsPro', price: '$410' },
                { img: cctv, desc: 'CCTV Camera', price: '$500' }
            ]
        }
    ];

    return (
        <Container>
            <Grid container spacing={2} flexDirection='row' sx={{ justifyContent: 'space-between' }}>
                {data.map((group, groupIndex) => (
                    <Grid key={groupIndex} item xs={12} sm={6} md={3}>
                        <Typography color='gray' variant='h5' textAlign='start' mb={3}>{group.category}</Typography>
                        {group.items.map((item, itemIndex) => (
                            <Grid key={itemIndex} item xs={12} sx={{ marginBottom: '16px' }}>
                                <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', padding: '12px' }}>
                                    <CardMedia
                                        component="img"
                                        alt={item.desc}
                                        height="auto"
                                        image={item.img}
                                        title={item.desc}
                                        sx={{
                                            width: '30%',
                                            maxWidth: '100%',
                                            flexShrink: 0,
                                            marginRight: { xs: 2, sm: 0 } // adjust margin for spacing
                                        }}
                                    />
                                    <Box style={{ flex: 1, padding: '8px' }}>
                                        <Typography component="h2" variant="h6" gutterBottom>
                                            {item.desc}
                                        </Typography>
                                        <Typography color='orange'>
                                            {item.price}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeaturedLatest;
