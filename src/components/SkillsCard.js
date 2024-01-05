import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function SkillsCard() {
    return (
        <Paper sx={{ p: 5 }} elevation={1}>
            <Typography align='left' variant='h4'>Skills</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'primary.main', borderWidth: 3, mt: 1 }}>
            </Box>
            <Box sx={{ mt: 3 }}>
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
            </Box>
        </Paper>
    );
}