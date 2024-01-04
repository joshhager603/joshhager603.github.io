import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Name() {
    return (
        <Box sx={{mt: 3}}>
            <Grid container>
                <Grid item xs='4'>
                </Grid>
                <Grid item xs='4'>
                    <Typography align='center' fontWeight='bold' variant='h2' color='primary' mt='3'>Hi, I'm Josh Hager.</Typography>
                </Grid>
                <Grid item xs='4'>
                </Grid>
                <Grid item xs='4'>
                </Grid>
                <Grid item xs='4'>
                    <Typography align='center' variant='h4'>I code cool things.</Typography>
                </Grid>
                <Grid item xs='4'>
                </Grid>
            </Grid>
        </Box>
    );
}