import { Box, Button, Checkbox, Container, Grid, Rating, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Review = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid container display='flex' flexDirection='column'>
                    <Box display='flex' flexDirection='column' sx={{ gap: 1 }}>
                        <Typography color='gray' variant='h4'>Add a review</Typography>
                        <Typography>Your email address will not be published. Required fields are marked *</Typography>
                        <Typography>Your rating *</Typography>
                        <Rating />
                        <Typography>Choose your photo</Typography>
                        <Button sx={{ width: isMobile ? '100%' : '50%', alignContent: 'start', bgcolor: 'gray', color: 'white' }}>Choose your file</Button>
                        <TextField fullWidth placeholder='Write your review here *' />
                    </Box>

                    <Grid item container display="flex" sx={{ mt: 5, flexDirection: 'row', gap: 2 }}>
                        <TextField
                            placeholder="Write your review here *"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            placeholder="Write your email here *"
                            sx={{ flex: 1 }}
                        />
                    </Grid>


                    <Box display='flex' flexDirection='row' alignItems="center">
                        <Checkbox />
                        <Typography>Save my name, email, and website in this browser for the next time.</Typography>
                    </Box>
                </Grid>
                <Button sx={{ bgcolor: 'orange', borderRadius: '50px', color: 'white', width: isMobile ? '100%' : '20%' }}>Submit</Button>
            </Container>
        </>
    )
}

export default Review
