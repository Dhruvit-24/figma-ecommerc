import React from 'react';
import { Box, Grid, TextField, Typography, Button, Container } from '@mui/material';

export default function Contactinfo() {
    return (
        <Container sx={{ mt: '50px' }}>
            <Grid container spacing={6}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight="500" gutterBottom>
                        CONTACT INFO
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.
                    </Typography>

                    <Box mt={3}>
                        <Typography variant="subtitle1" fontWeight="500" gutterBottom>
                            OFFICE
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            730 Glenstone Ave 65802, Springfield, US
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            +123 222 333 44
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            info@yourinfo.com
                        </Typography>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="subtitle1" fontWeight="500" gutterBottom>
                            MANAGEMENT
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            730 Glenstone Ave 65802, Springfield, US
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            +123 666 777 88
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            info@yourinfo.com
                        </Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight="500" gutterBottom>
                        ANY QUESTIONS?
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Use the form below to get in touch with us.
                    </Typography>

                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth placeholder="Your full name *" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth placeholder="Write your email here *" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth placeholder="Phone number" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth placeholder="Write your subject here" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth placeholder="Write your message here *" variant="outlined" size="small" multiline rows={4} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" sx={{ bgcolor: '#FF6849', borderRadius: '50px' }}>
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}
