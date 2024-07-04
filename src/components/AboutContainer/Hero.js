import React from 'react';
import hero from '../../assets/abouthero.png';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

const Hero = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={8} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                <Grid item md={6}>
                    <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img src={hero} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="hero" />
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            textAlign: 'center',
                        }}>
                            <PlayCircleOutlineRoundedIcon style={{ height: '100px', width: '100px' }} />
                        </Box>
                    </Box>
                </Grid>



                <Grid item md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant='h5' color='gray'><b>Best Digital Store BasicStore</b></Typography>
                    <Typography sx={{ color: 'gray', mt: { xs: 3, md: 0 } }}>
                        Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era.
                        Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet
                        duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra
                        eros at.
                    </Typography>
                    <Typography sx={{ color: 'gray' }}>
                        Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet
                        duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur
                        diam senectus congue velit et.
                    </Typography>
                    <Button sx={{ bgcolor: 'orange', width: '50%', mt: 3, color: 'white', borderRadius: '50px' }}>
                        Go To Shop
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hero;
