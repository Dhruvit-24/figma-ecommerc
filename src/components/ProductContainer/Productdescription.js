import { Typography, Container, Grid, Box, Rating } from '@mui/material';
import React from 'react'
import first from '../../assets/firstgirl.png'
import second from '../../assets/secondgirl.png'

const Productdescription = () => {
    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid container display='flex' flexDirection='column' gap={2}>
                    <Typography variant='h4' color='gray'>Product Description</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate</Typography>
                    <Typography sx={{ px: 4 }}>Donec nec justo eget felis facilisis fermentum</Typography>
                    <Typography sx={{ px: 4 }}>Suspendisse urna viverra non, semper suscipit pede.</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem</Typography>

                    <Grid item mt={1} display='flex' flexDirection='column' gap={5} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                            <img src={first} alt='girlimg' />
                            <Box>
                                <Rating name="size-small" defaultValue={3} size="small" />
                                <Typography>Emma Chamberlin  – 11/22/2022</Typography>
                                <Typography>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                            <img src={second} alt='girlimg' />
                            <Box>
                                <Rating name="size-small" defaultValue={4} size="small" />
                                <Typography>Thompson J – 11/22/2022</Typography>
                                <Typography>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis </Typography>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Productdescription