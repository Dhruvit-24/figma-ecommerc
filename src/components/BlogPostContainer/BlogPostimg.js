import { Container, Box, Typography } from '@mui/material';
import blog from '../../assets/blog post.png';

const BlogPostimg = () => {
    return (
        <Container maxWidth="md">
            <img src={blog} alt="Blog Post" style={{ maxWidth: '100%' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Typography sx={{ textAlign: 'center', mt: '2px', color: '#FF6543' }}>
                    Feb 22, 2023 - Technology
                </Typography>
            </Box>
            <Typography variant='h3' component='h1' color='grey'>
                5 Must-Have Gadgets for the Modern Home
            </Typography>

            <Typography sx={{ mt: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est euismod.</Typography>
            <Typography sx={{ mt: '10px' }}>Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.</Typography>
            <Typography variant='h4' component='h1' sx={{ mt: "15px", color: 'grey' }}>“Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. “</Typography>

            <Typography variant='h3' mt='20px' color='grey'>Is this great ?</Typography>
        </Container >
    );
};

export default BlogPostimg;
