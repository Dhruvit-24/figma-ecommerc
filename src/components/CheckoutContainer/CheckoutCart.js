import { Box, Button, Container, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

const CheckoutCart = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid container>
                    <Typography variant='h4' color='textSecondary' gutterBottom>
                        Cart totals
                    </Typography>
                    <Divider sx={{ width: '100%' }} />
                    <Grid item>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                            <Typography>Subtotal</Typography>
                            <Typography sx={{ color: 'orange' }}>$2400.00</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                            <Typography>Total</Typography>
                            <Typography sx={{ color: 'orange' }}>$2400.00</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item mt={5}>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="payment-method"
                            name="payment-method"
                            value={selectedValue}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="direct-bank-transfer"
                                control={<Radio />}
                                label="Direct Bank Transfer"
                            />
                            <FormControlLabel
                                value="check-payments"
                                control={<Radio />}
                                label="Check Payments"
                            />
                            <FormControlLabel
                                value="cash-on-delivery"
                                control={<Radio />}
                                label="Cash on Delivery"
                            />
                            <FormControlLabel
                                value="paypal"
                                control={<Radio />}
                                label="PayPal"
                            />
                        </RadioGroup>
                        <Button sx={{ backgroundColor: '#FF6543', borderRadius: '100px', color: 'white' }}>Place An Order</Button>
                    </FormControl>
                </Grid>
            </Container>
        </>
    )
}

export default CheckoutCart