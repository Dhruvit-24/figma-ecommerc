import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import iphon from '../../assets/cartiphon.png';
import watch from '../../assets/cartwatch.png';

const CartProduct = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                        <Typography variant='h5' color='gray'>Product</Typography>

                        {/* iPhone */}
                        <Box display='flex' alignItems='center' mt={1}>
                            <img src={iphon} alt='iPhone' style={{ width: '100px', marginTop: '10px' }} />
                            <Box ml={2}>
                                <Typography variant='body1'>iPhone 15 Pro Max</Typography>
                                <Typography variant='body2'>$2000.00</Typography>
                            </Box>
                        </Box>

                        {/* Watch */}
                        <Box display='flex' alignItems='center' mt={1}>
                            <img src={watch} alt='Watch' style={{ width: '100px', marginTop: '10px' }} />
                            <Box ml={2}>
                                <Typography variant='body1'>Watch Name</Typography>
                                <Typography variant='body2'>$2000.00</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* Quantity Section */}
                <Grid item xs={12} md={4}>
                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                        <Typography variant='h5' color='gray'>Quantity</Typography>
                        <Typography sx={{ mt: 6 }}>1</Typography>
                        <Typography sx={{ mt: 10 }}>1</Typography>
                    </Box>
                </Grid>

                {/* Subtotal Section */}
                <Grid item xs={12} md={4}>
                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                        <Typography variant='h5' color='gray'>Subtotal</Typography>
                        <Typography sx={{ mt: 6 }}>$2000.00</Typography>
                        <Typography sx={{ mt: 6 }}>$2000.00</Typography>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default CartProduct;
