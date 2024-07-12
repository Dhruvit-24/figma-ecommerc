import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const CartTotal = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant='h4' color='textSecondary' gutterBottom>
                Cart totals
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2} display='flex' flexDirection='column'>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Subtotal</Typography>
                        <Typography sx={{ color: 'orange' }}>$2400.00</Typography>
                    </Box>
                </Grid>
                <Divider sx={{ mt: 2 }} />
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Total</Typography>
                        <Typography sx={{ color: 'orange' }}>$2400.00</Typography>
                    </Box>
                </Grid>

                <Box display='flex' flexDirection='row' gap={4} mt={4}>
                    <Button sx={{ bgcolor: 'orange', borderRadius: '50px', color: 'white' }}>Update cart</Button>
                    <Button sx={{ bgcolor: 'orange', borderRadius: '50px', color: 'white' }}>Continue shopping</Button>
                    <Button sx={{ bgcolor: 'orange', borderRadius: '50px', color: 'white' }}>Proceed to checkout</Button>
                </Box>
            </Grid>
        </Container>
    );
};

export default CartTotal;
