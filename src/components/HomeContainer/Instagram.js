import React from 'react';
import one from '../../assets/insta1.png';
import two from '../../assets/insta2.png';
import three from '../../assets/insta3.png';
import four from '../../assets/insta4.png';
import five from '../../assets/insta5.png';
import six from '../../assets/insta6.png';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const Instagram = () => {
    const images = [one, two, three, four, five, six];

    return (
        <>
            <Container maxWidth='xl' sx={{ mt: 5 }}>
                <Typography variant='h4' textAlign='center' color='gray'>
                    Instagram #shoplite
                </Typography>
                <Grid container spacing={5} sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
                    {images.map((image, index) => (
                        <Grid item key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={image}
                                    alt={`Instagram image ${index + 1}`}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Instagram;
