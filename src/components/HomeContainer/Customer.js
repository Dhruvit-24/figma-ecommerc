import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import SwipeableViews from 'react-swipeable-views';


const Customer = () => {
    const data = [
        {
            desc: '“I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
            icon: <Rating name="read-only" readOnly value={5} />,
            name: 'Emma Chamberlin'
        },
        {
            desc: '“I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
            icon: <Rating name="read-only" readOnly value={2} />,
            name: 'Thomas John'
        },
        {
            desc: '“I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
            icon: <Rating name="read-only" readOnly value={4.5} />,
            name: 'Kevin Bryan'
        },
        {
            desc: '“I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
            icon: <Rating name="read-only" readOnly value={3} />,
            name: 'Jhon'
        },
        {
            desc: '“I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
            icon: <Rating name="read-only" readOnly value={4} />,
            name: 'Sam'
        },
        {
            desc: '“I stumbled upon this tech store while searching for a new laptop, and I couldn’t be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”',
            icon: <Rating name="read-only" readOnly value={4} />,
            name: 'Dhoop'
        }
    ];

    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const maxCardsPerSwipe = 3;
    const numSwipeViews = Math.ceil(data.length / maxCardsPerSwipe);

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant='h5' color='gray'>Customers Reviews</Typography>
            <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                {[...Array(numSwipeViews)].map((_, index) => (
                    <Grid container spacing={3} key={index} sx={{ mt: 1 }}>
                        {data.slice(index * maxCardsPerSwipe, (index + 1) * maxCardsPerSwipe).map((item, idx) => (
                            <Grid item xs={12} sm={4} key={item.name}>
                                <Card sx={{ height: '100%' }}>
                                    <CardContent>
                                        <Typography variant="body1" gutterBottom>{item.desc}</Typography>
                                        <Box sx={{ mt: 2 }}>
                                            {item.icon}
                                        </Box>
                                        <Typography variant='h5'>{item.name}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </SwipeableViews>
        </Container>
    );
};

export default Customer;
