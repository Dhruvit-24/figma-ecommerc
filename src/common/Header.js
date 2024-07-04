import { Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Container>
                <Grid container display='flex' justifyContent='space-evenly' mt={2}>

                    <Typography>Need help? Call us 112233344455</Typography>

                    <Typography>Summer sale discount off 60% off! <Link to='/shop'>Shop Now </Link></Typography>

                    <Typography>2-3 business days delivery & free returns</Typography>
                </Grid >
            </Container>
            <Divider sx={{ color: 'grey', mt: 2 }} />
        </>
    )
}

export default Header