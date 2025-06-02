import {
    Box, Grid, Typography, Avatar, TextField, Button, Divider, Link,
    Container
} from '@mui/material';
import post from '../../assets/blogsec2.png'

const comments = [
    {
        name: "Sam Smith",
        date: "Jul 10",
        text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor...",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Santie Mary",
        date: "Jul 10",
        text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor...",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Analisa Nora",
        date: "Jul 10",
        text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor...",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
];

export default function BlogPostsection2() {
    return (
        <Box sx={{ maxWidth: '1000px', margin: 'auto', padding: 4 }}>
            <Grid container spacing={4}>

                <Container>
                    <Grid container spacing={10} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <img
                                src={post}
                                alt="Article"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                VELIT, PRAESENT PHARETRA MALESUADA
                            </Typography>
                            <Typography paragraph>
                                Velit, praesent pharetra malesuada id pulvinar amet...
                            </Typography>
                            <Typography paragraph>
                                Tortor diam dignissim amet, in interdum aliquet...
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

                <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary">
                        Tags: <Link href="#">Tech</Link>, <Link href="#">Tips</Link>, <Link href="#">Gadgets</Link>
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="body2">&lt; BEST DIGITAL WATCHES TO BUY IN THIS YEAR</Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                    <Typography variant="body2" color="error">
                        BEST AIRPOD THAT YOU MUST GET IT &gt;
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        {comments.length} COMMENTS
                    </Typography>

                    {comments.map((comment, idx) => {
                        const isMiddle = idx === Math.floor(comments.length / 2);
                        return (
                            <Box
                                key={idx}
                                sx={{
                                    display: 'flex',
                                    mb: 3,
                                    ml: isMiddle ? '10%' : 0,
                                }}
                            >
                                <Avatar src={comment.avatar} sx={{ mr: 2, width: 56, height: 56 }} />
                                <Box>
                                    <Typography fontWeight="bold">
                                        {comment.name}{' '}
                                        <span style={{ fontWeight: 'normal', color: '#888' }}>{comment.date}</span>
                                    </Typography>
                                    <Typography paragraph>{comment.text}</Typography>
                                    <Link >Reply Now</Link>
                                </Box>
                            </Box>
                        );
                    })}
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="h6">LEAVE A COMMENT</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Your email address will not be published. Required fields are marked *
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            label="Write your comment here *"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="Write your name here *" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Write your email here *" fullWidth />
                            </Grid>
                        </Grid>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Save my name, email, and website in this browser for the next time.
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2 }} color="error">
                            POST COMMENT
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
