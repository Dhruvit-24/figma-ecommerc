import { Box, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Blogmain = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container display='flex' justifyContent='center' flexDirection='column' textAlign='center'>
                <Typography variant='h2' color='gray'>BLOGS</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography>Home</Typography></Link>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 1 }} />
                    <Link href='/shop'><Typography>Shop</Typography></Link>
                </Box>
            </Grid>
        </Container>
    )
}
