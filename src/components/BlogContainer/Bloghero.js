import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    IconButton,
    Chip,
    Link,
    Pagination,
    Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import Blog4 from '../../assets/blog4.png';
import Blog5 from '../../assets/blog5.png';
import Blog6 from '../../assets/blog6.png';
import Blog7 from '../../assets/blog7.png';
import Blog8 from '../../assets/blog8.png';
import Blog9 from '../../assets/blog9.png';

const categories = ['All', 'Phones', 'Accessories', 'Tablets', 'Watches'];
const tags = ['White', 'Cheap', 'Mobile', 'Modern'];
const socialLinks = ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Pinterest'];

const blogData = [
    {
        title: '5 MUST-HAVE GADGETS FOR THE MODERN HOME',
        desc: 'Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadgets every modern home should have. From smart assistants to home security systems, discover how these innovations can enhance your daily life and bring convenience to your fingertips.',
        tag: 'GADGETS',
        img: Blog1
    },
    {
        title: 'Eco-Friendly Innovations Making a Difference',
        desc: 'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries, from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future.',
        tag: 'PHONES',
        img: Blog2
    },
    {
        title: 'TOP TABLETS FOR STUDENTS IN 2025',
        desc: 'In todays remote work environment, productivity is key. Discover the top apps and tools that can help you stay organized, focused, and efficient while working from home. From project management platforms to time-tracking apps find out which tools are essential for maximizing your productivity.',
        tag: 'DIGITAL WATCH',
        img: Blog3
    },
    {
        title: 'AFFORDABLE SMARTWATCHES TO CONSIDER',
        desc: 'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future.',
        tag: 'WATCHES',
        img: Blog4
    },
    {
        title: 'PHONES THAT DEFINE STYLE AND PERFORMANCE',
        desc: 'In todays remote work environment, productivity is key. Discover the top apps and tools that can help you stay organized, focused, and efficient while working from home. From project management platforms to time-tracking apps find out which tools are essential for maximizing your productivity.',
        tag: 'PHONES',
        img: Blog5
    },
    {
        title: 'GADGETS THAT MAKE REMOTE WORK EASIER',
        desc: 'Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadgets every modern home should have. From smart assistants to home security systems, discover how these innovations can enhance your daily life and bring convenience to your fingertips.',
        tag: 'GADGETS',
        img: Blog6
    },
    {
        title: 'MOBILE PHOTOGRAPHY TIPS FOR BEGINNERS',
        desc: 'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future.',
        tag: 'MOBILE',
        img: Blog7
    },
    {
        title: 'ACCESSORY TRENDS TO WATCH THIS YEAR',
        desc: 'In todays remote work environment, productivity is key. Discover the top apps and tools that can help you stay organized, focused, and efficient while working from home. From project management platforms to time-tracking apps find out which tools are essential for maximizing your productivity.',
        tag: 'ACCESSORIES',
        img: Blog8
    },
    {
        title: 'CHOOSING THE RIGHT TABLET FOR YOU',
        desc: 'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future.',
        tag: 'TABLETS',
        img: Blog9
    }
];

const Bloghero = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', gap: 4, p: 4 }}>

                <Box sx={{ width: '25%' }}>
                    <Box sx={{ mb: 3 }}>
                        <TextField
                            fullWidth
                            placeholder="Search"
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon sx={{ backgroundColor: '#FF6543', borderRadius: '10%', color: 'white' }} />
                                    </IconButton>
                                )
                            }}
                        />
                    </Box>

                    <Box mb={3}>
                        <Typography variant="h6" gutterBottom>CATEGORIES</Typography>
                        {categories.map(cat => (
                            <Typography key={cat} variant="body2" sx={{ mb: 1 }}>{cat}</Typography>
                        ))}
                    </Box>

                    <Box mb={3}>
                        <Typography variant="h6" gutterBottom>TAGS</Typography>
                        {tags.map(tag => (
                            <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1, }} />
                        ))}
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom>SOCIAL LINKS</Typography>
                        {socialLinks.map(link => (
                            <Typography key={link} variant="body2" sx={{ mb: 1 }}>{link}</Typography>
                        ))}
                    </Box>
                </Box>


                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" gutterBottom>
                        Showing 1–9 of 55 results
                    </Typography>

                    <Grid container spacing={2}>
                        {blogData.map((item, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box sx={{ border: '1px solid #eee', p: 2, transition: 'all 0.3s ease' }}>
                                        <Box sx={{ display: 'flex', backgroundColor: '#FF6543', width: '60%', borderRadius: '25px' }}>
                                            <Typography variant="caption" color="primary" sx={{ fontWeight: 700, ml: '10px', color: 'white' }}>
                                                {item.tag}
                                            </Typography>
                                        </Box>
                                        <Box
                                            component="img"
                                            src={item.img}
                                            alt="blog"
                                            width="100%"
                                            height={150}
                                            sx={{ objectFit: 'cover', my: 1 }}
                                        />
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {item.title}
                                        </Typography>

                                        <Box
                                            sx={{
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: isExpanded ? 'unset' : 2,
                                                transition: 'all 0.3s ease',
                                                mb: 1
                                            }}
                                        >
                                            <Typography variant="body2" color="text.secondary">
                                                {item.desc}
                                            </Typography>
                                        </Box>

                                        <Link
                                            underline="hover"
                                            variant="body2"
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => toggleExpanded(index)}
                                        >
                                            {isExpanded ? 'Read Less' : 'Read More'}
                                        </Link>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Box mt={4} display="flex" justifyContent="center">
                        <Pagination count={3} page={1} />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
export default Bloghero;