import React, { useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import first from '../../assets/latestp1.png';
import second from '../../assets/latestp2.png';
import third from '../../assets/latest3.png';
import fourth from '../../assets/latestp4.png';
import SwipeableViews from 'react-swipeable-views';

const LatestPost = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const data = [
        {
            title: 'Gadgets',
            img: first,
            desc: '5 Must-Have Gadgets for the Modern Home',
            desc2: 'Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadgets every modern home should have. From smart assistants to home security systems, discover how these innovations can enhance your daily life and bring convenience to your fingertips.'
        },
        {
            title: 'Phones',
            img: second,
            desc: 'Eco-Friendly Innovations Making a Difference',
            desc2: 'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries, from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future.'
        },
        {
            title: 'Tech',
            img: third,
            desc: 'The Future of Wearable Tech: Trends to Watch',
            desc2: 'Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology. Explore the latest trends, from health monitoring devices to fashion-forward wearables, and learn how these advancements are shaping the future of personal technology'
        },
        {
            title: 'Digital Watch',
            img: fourth,
            desc: 'Top Apps and Tools for Remote Work',
            desc2: 'In today\'s remote work environment, productivity is key. Discover the top apps and tools that can help you stay organized, focused, and efficient while working from home. From project management platforms to time-tracking apps, find out which tools are essential for maximizing your productivity.'
        }
    ];

    const [expandedContent, setExpandedContent] = useState(new Array(data.length).fill(false));

    const toggleExpand = (index) => {
        const newExpandedContent = [...expandedContent];
        newExpandedContent[index] = !newExpandedContent[index];
        setExpandedContent(newExpandedContent);
    };

    if (isSmallScreen) {
        return (
            <Container sx={{ mt: 5 }}>
                <Typography variant='h5' color='gray'>Latest Post</Typography>
                <SwipeableViews enableMouseEvents>
                    {data.map((item, index) => (
                        <div key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" mb={5}>{item.title}</Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.img}
                                        alt={item.title}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {expandedContent[index] ? item.desc2 : `${item.desc2.substring(0, 100)}...`}
                                        {item.desc2.length > 100 && (
                                            <Button onClick={() => toggleExpand(index)}>
                                                {expandedContent[index] ? 'Read Less' : 'Read More'}
                                            </Button>
                                        )}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </SwipeableViews>
            </Container>
        );
    } else {
        return (
            <Container sx={{ mt: 5 }}>
                <Typography variant='h5' color='gray'>Latest Post</Typography>
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" mb={5}>{item.title}</Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.img}
                                        alt={item.title}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {expandedContent[index] ? item.desc2 : `${item.desc2.substring(0, 100)}...`}
                                        {item.desc2.length > 100 && (
                                            <Button onClick={() => toggleExpand(index)}>
                                                {expandedContent[index] ? 'Read Less' : 'Read More'}
                                            </Button>
                                        )}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
};

export default LatestPost;
