import { Container, Typography, Card, CardMedia, Grid } from '@mui/material';
import React from 'react';
// data1
import headset from '../../assets/lheadphon.png';
import xpro from '../../assets/lphon.png';
import iphon from '../../assets/liphon.png';
// data2
import airpods from '../../assets/L airpods.png';
import screentouch from '../../assets/L watch.png';
import digiwatch from '../../assets/L digiwatch.png';
// data3
import wireless from '../../assets/B joystick.png';
import airpod from '../../assets/B Airpods.png';
import stab from '../../assets/B stabilizer.png';
// data4
import iphon15 from '../../assets/O iphon.png'
import airpod1 from '../../assets/O Airpods.png'
import cctv from '../../assets/cctv.png'

const FeaturedLatest = () => {
    const data1 = [
        {
            img: headset,
            desc: 'Wireless Headset',
            price: '$500'
        },
        {
            img: xpro,
            desc: 'Iphon Xpro Max',
            price: '$820'
        },
        {
            img: iphon,
            desc: 'Iphon 11pro',
            price: '$960'
        }
    ];

    const data2 = [
        {
            img: airpods,
            desc: 'Airpods Pro',
            price: '$450'
        },
        {
            img: screentouch,
            desc: 'Screen Watch',
            price: '$750'
        },
        {
            img: digiwatch,
            desc: 'Digital Watch',
            price: '$660'
        }
    ];

    const data3 = [
        {
            img: wireless,
            desc: 'Wireless Joystick',
            price: '$250'
        },
        {
            img: airpod,
            desc: 'Apple AirpodsPro',
            price: '$450'
        },
        {
            img: stab,
            desc: 'Gimbal Stabilizer',
            price: '$150'
        }
    ];

    const data4 = [
        {
            img: iphon15,
            desc: 'Iphon 15pro',
            price: '$999'
        },
        {
            img: airpod1,
            desc: 'Apple AirpodsPro',
            price: '$410'
        },
        {
            img: cctv,
            desc: 'CCTV Camera',
            price: '$500'
        }
    ]


    return (
        <Container>
            <Grid container flexDirection='row' spacing={6}>
                {/* data1 */}
                <Grid item md={3}>
                    <Typography color='gray' variant='h5' textAlign='center' mb={3}>Featured</Typography>
                    {data1.map((item, index) => (
                        <Grid item key={index} sx={{ marginBottom: '16px' }}>
                            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%', padding: '12px' }}>
                                <CardMedia
                                    component="img"
                                    alt={item.desc}
                                    height="auto"
                                    image={item.img}
                                    title={item.desc}
                                    sx={{ width: '30%', maxWidth: '30%', flexShrink: 0 }}
                                />
                                <div style={{ flex: 1, padding: '8px' }}>
                                    <Typography component="h2" variant="h6" gutterBottom>
                                        {item.desc}
                                    </Typography>
                                    <Typography color='orange'>
                                        {item.price}
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {/* data2 */}
                <Grid item md={3}>
                    <Typography color='gray' variant='h5' textAlign='center' mb={3}>Latest Item</Typography>
                    {data2.map((item, index) => (
                        <Grid item key={index} sx={{ marginBottom: '16px' }}>
                            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%', padding: '12px' }}>
                                <CardMedia
                                    component="img"
                                    alt={item.desc}
                                    height="auto"
                                    image={item.img}
                                    title={item.desc}
                                    sx={{ width: '30%', maxWidth: '30%', flexShrink: 0 }}
                                />
                                <div style={{ flex: 1, padding: '8px' }}>
                                    <Typography component="h2" variant="h6" gutterBottom>
                                        {item.desc}
                                    </Typography>
                                    <Typography color='orange'>
                                        {item.price}
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {/* data3 */}
                <Grid item md={3}>
                    <Typography color='gray' variant='h5' textAlign='center' mb={3}>Best Review</Typography>
                    {data3.map((item, index) => (
                        <Grid item key={index} sx={{ marginBottom: '16px' }}>
                            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%', padding: '12px' }}>
                                <CardMedia
                                    component="img"
                                    alt={item.desc}
                                    height="auto"
                                    image={item.img}
                                    title={item.desc}
                                    sx={{ width: '30%', maxWidth: '30%', flexShrink: 0 }}
                                />
                                <div style={{ flex: 1, padding: '8px' }}>
                                    <Typography component="h2" variant="h6" gutterBottom>
                                        {item.desc}
                                    </Typography>
                                    <Typography color='orange'>
                                        {item.price}
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {/* data4 */}
                <Grid item md={3}>
                    <Typography color='gray' variant='h5' textAlign='center' mb={3}>On Sale</Typography>
                    {data4.map((item, index) => (
                        <Grid item key={index} sx={{ marginBottom: '16px' }}>
                            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%', padding: '12px' }}>
                                <CardMedia
                                    component="img"
                                    alt={item.desc}
                                    height="auto"
                                    image={item.img}
                                    title={item.desc}
                                    sx={{ width: '30%', maxWidth: '30%', flexShrink: 0 }}
                                />
                                <div style={{ flex: 1, padding: '8px' }}>
                                    <Typography component="h2" variant="h6" gutterBottom>
                                        {item.desc}
                                    </Typography>
                                    <Typography color='orange'>
                                        {item.price}
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturedLatest;
