import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutMe() {
    return (
        <Box sx={{mt: 6}}>
            <Grid container>
            <Grid item xs='3.5'>
                </Grid>
                <Grid item xs='5'>
                    <Typography fontWeight='bold' variant='h4'>About Me</Typography>
                </Grid>
                <Grid item xs='3.5'>
                </Grid>
                <Grid item xs='3.5'>
                </Grid>
                <Grid item xs='5'>
                    <Typography variant='h6'>
                        From a young age, I've always been passionate about programming and computers. Now, I'm a junior Computer Science student at Case Western
                        Reserve University, and I'm seeking an internship in the software engineering field for Summer 2024.
                        </Typography>
                </Grid>
                <Grid item xs='3.5'>
                </Grid>
            </Grid>
        </Box>
    );
}