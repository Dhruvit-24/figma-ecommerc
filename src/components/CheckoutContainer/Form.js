import React from 'react'
import { TextField, Grid, Typography, Container, Box } from '@mui/material';

const Form = () => {

    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid container display='flex' spacing={4}>
                    <Grid item md={6}>

                        <Typography variant='h5' color='gray'>Billing Details</Typography>
                        <Box sx={{ gap: 2 }}>
                            <label mt={2}>FirstName</label>
                            <TextField fullWidth />

                            <label mt={2}>lastName</label>
                            <TextField fullWidth />

                            <label mt={2}>Company Name</label>
                            <TextField fullWidth />

                            <label mt={2}>Country / Region *</label>
                            <TextField fullWidth placeholder='United States (US)' />

                            <label mt={2}>Street address *</label>
                            <TextField fullWidth placeholder='House number and street name' />
                            <TextField fullWidth placeholder='Appartments, suite, etc.' />

                            <label mt={2}>Town / City *</label>
                            <TextField fullWidth placeholder='United States (US)' />

                            <label mt={2}>State *</label>
                            <TextField fullWidth placeholder='Florida' />

                            <label mt={2}>ZIP Code *</label>
                            <TextField fullWidth />

                            <label mt={2}>Phone *</label>
                            <TextField fullWidth />

                            <label mt={2}>Email address *</label>
                            <TextField fullWidth />
                        </Box>

                    </Grid>
                    <Grid item md={6}>
                        <Typography variant='h5' color='gray'>Additional Information</Typography>
                        <label mt={2}>Order notes (optional)</label>
                        <TextField fullWidth placeholder='Notes about your order. Like special notes for delivery.' />
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default Form