import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function AboutMeCard() {
    return (
        <Paper sx={{ p: 5 }} elevation={1}>
            <Grid container>
                <Grid item xs='1.5'>
                    <Typography align='left' fontWeight='bold' variant='h4'>About Me</Typography>
                    <Box sx={{ borderBottom: 1, borderColor: 'primary.main', borderWidth: 3, mt: 1 }}></Box>
                </Grid>
                <Grid item xs='10.5'>
                </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
                <Grid container>
                    <Grid item xs='6'>
                        <Typography variant='h6'>
                            Hi! My name is Josh Hager, and I'm an aspiring software engineer from Rochester, NY.
                        </Typography>
                        <Typography sx={{ mt: 3 }} variant='h6'>
                            I've always been passionate about programming and computers. I started my programming journey writing mods for the video game
                            Minecraft, and now I'm a junior Computer Science student at Case Western Reserve University in Cleveland, OH.
                        </Typography>
                        <Typography sx={{ mt: 3 }} variant='h6'>
                            I'm skilled at developing applications in a variety of languages, including Java, C++, JavaScript, and Python. I learn quickly, and
                            excel at building functional, efficient, and beautiful products.
                        </Typography>
                        <Typography sx={{ mt: 3 }} variant='h6'>
                            Outside of programming and school, I enjoy hiking, playing Spikeball, and watching the Buffalo Bills. I also love specialty coffee, and like brewing
                            everything from Americanos to pour-overs.
                        </Typography>
                    </Grid>
                    <Grid item xs='6'>
                        <Avatar src='./static/bills.jpg' variant='rounded' />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}