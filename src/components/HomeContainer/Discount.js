import React from 'react'
import lap from '../../assets/discountlaptop.png'
import { Button, Grid, Typography } from '@mui/material'

const Discount = () => {
    const days = 21;
    const hours = 22;
    const minutes = 19;
    const seconds = 30;

    return (
        <>
            <Grid container mt={5} spacing={5} display='flex' justifyContent='center' >
                <Grid item md={6} display='flex'>
                    <img src={lap} style={{ width: '100%', height: '70%' }} />
                </Grid>
                <Grid item md={6}>
                    <Typography variant='h2'>30% Discount on<br /> apple collection</Typography>
                    <Typography mt={2} variant='h2'>{days} : {hours} : {minutes} : {seconds}</Typography>
                    {/* <Typography>Days   Hrs   Min   Sec</Typography> */}
                    <Button sx={{ bgcolor: 'orange', width: '50%', color: 'white', borderRadius: '50px', mt: 2 }}>Shop Collection</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Discount