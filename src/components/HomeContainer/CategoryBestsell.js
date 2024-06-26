import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import React from 'react'
import phon from '../../assets/phon.png'
import play from '../../assets/playsta.png'
import clock from '../../assets/watch.png'
import joy from '../../assets/joystck.png'
import ear from '../../assets/earpods.png'
import laptop from '../../assets/laptop.png'

import ipad from '../../assets/ipad.png'
import dron from '../../assets/dron.png'
import apple from '../../assets/applewatch.png'
import uhd from '../../assets/uhdtv.png'
import bluetooth from '../../assets/bluetoothspeaker.png'

const CategoryBestsell = () => {

    const imgdata1 = [
        {
            img: phon,
            title: 'Phones'
        },
        {
            img: play,
            title: 'Play Station'
        },
        {
            img: clock,
            title: 'Digital Watches'
        },
        {
            img: joy,
            title: 'Joysticks'
        },
        {
            img: ear,
            title: 'EarPods'
        },
        {
            img: laptop,
            title: 'Laptops'
        }
    ];

    const imgdata2 = [
        {
            img: ipad,
            title: 'iPad(9th Gen)',
            price: '$870'
        },
        {
            img: dron,
            title: 'Dron With Camera',
            price: '$600'
        },
        {
            img: apple,
            title: 'Apple Watch(2ndGen)',
            price: '$400'
        },
        {
            img: uhd,
            title: 'Ultra HD Tv',
            price: '$2000'
        },
        {
            img: bluetooth,
            title: 'Bluetooth Speaker ',
            price: '$70'
        }
    ];

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Typography variant='h5' color='gray' mt={5} gutterBottom>Categories</Typography>
                <Grid container spacing={2} justifyContent="center">
                    {imgdata1.map((item, index) => (
                        <Grid item key={index} xs={4} sm={2} md={2} display='flex' flexDirection='column' alignItems='center'>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardContent>
                                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', marginBottom: '8px' }} />
                                    <Typography textAlign='center'>{item.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant='h5' color='gray' mt={5} gutterBottom>Best selling items</Typography>
                <Grid container gap={5} justifyContent="center">
                    {imgdata2.map((item, index) => (
                        <Grid item key={index} xs={4} sm={2} md={2} display='flex' flexDirection='column' alignItems='center'>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardContent>
                                    <img src={item.img} alt={item.title} style={{ width: '100px', height: '100px', marginBottom: '8px', alignContent: 'center' }} />
                                    <Typography>{item.title}</Typography>
                                    <Typography variant='subtitle1'>{item.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default CategoryBestsell;