import React from 'react'
import { Grid, Box, Typography, Container } from '@mui/material';
import contact from '../../assets/contact.png'

const Ourstore = () => {
    return (
        <Container sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 10 } }}>
            <Grid container spacing={0} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={contact}
                        alt="Devices on table"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: 2,
                        }}
                    />
                </Grid>


                <Grid item xs={12} md={6}>
                    <Box sx={{ px: { xs: 0, md: 6 }, mt: { xs: 4, md: 0 } }}>
                        <Typography variant="h6" sx={{ letterSpacing: 1, fontWeight: 300, mb: 1 }}>
                            OUR STORES
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>
                            You can also directly buy products from our stores.
                        </Typography>

                        <Grid container spacing={4}>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" sx={{ fontWeight: 400, letterSpacing: 1, mb: 1 }}>
                                    USA
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    730 Glenstone Ave 65802, US
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    +123 666 777 88
                                </Typography>
                                <Typography variant="body2">info@yourinfo.com</Typography>
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" sx={{ fontWeight: 400, letterSpacing: 1, mb: 1 }}>
                                    FRANCE
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    13 Rue Montmartre 75001, Paris, France
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    +123 222 333 44
                                </Typography>
                                <Typography variant="body2">info@yourinfo.com</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Ourstore