import React from 'react';
import { Box, Button, Container, Divider, Grid, Rating, Typography } from '@mui/material';
import phon1 from '../../assets/iphon1.png';
import phon2 from '../../assets/iphon2.png';
import phon3 from '../../assets/iphon3.png';
import phon4 from '../../assets/iphon5.png';

const Iphone = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>

                <Grid item md={2} xs={12} flexDirection='column' gap={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img src={phon1} alt="iphone1" />
                    <img src={phon3} alt="iphone3" />
                    <img src={phon2} alt="iphone2" />
                </Grid>


                <Grid item md={5} xs={12} display='flex' justifyContent='center'>
                    <img src={phon4} alt="iphone4" />
                </Grid>


                <Grid item md={5} xs={12} display='flex' flexDirection='column' gap={2}>
                    <Typography variant='h3'>Iphone 15 Pro Max</Typography>
                    <Typography sx={{ color: 'orange', variant: 'h4' }}>$2000.00</Typography>
                    <Rating name="size-small" defaultValue={3} size="small" />
                    <Typography>
                        Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus.
                    </Typography>
                    <Divider />


                    <Typography variant='h5'>Color</Typography>
                    <Box display='flex' flexDirection='row' gap={3}>
                        <Typography>Black</Typography>
                        <Typography>Blue</Typography>
                        <Typography>Red</Typography>
                        <Typography>Sky Blue</Typography>
                    </Box>


                    <Typography variant='h5'>Size</Typography>
                    <Box display='flex' flexDirection='row' gap={3}>
                        <Typography>Xl</Typography>
                        <Typography>L</Typography>
                        <Typography>M</Typography>
                        <Typography>S</Typography>
                    </Box>


                    <Box display='flex' flexDirection='row' gap={3} mt={2}>
                        <Button sx={{ bgcolor: 'orange', color: 'white', borderRadius: '50px' }}>Order Now</Button>
                        <Button sx={{ bgcolor: 'black', color: 'white', borderRadius: '50px' }}>Add To Cart</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Iphone;
