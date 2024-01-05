import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SocialIcons from './SocialIcons';
import Paper from '@mui/material/Paper';

export default function NameCard() {
    return (
        <Paper sx={{ pt: 8, pb: 8 }} elevation={1}>
            <Grid container>
                <Grid item xs='6'>
                    <Box sx={{ mt: 10 }}>
                        <Grid container>
                            <Grid item xs='1'>
                            </Grid>
                            <Grid item xs='10.5'>
                                <Typography align='right' fontWeight='bold' variant='h2' color='primary' mt='3'>Hi, I'm Josh Hager.</Typography>
                                <Typography align='right' variant='h4'>I code cool things.</Typography>
                            </Grid>
                            <Grid item xs='0.5'>
                            </Grid>
                            <Grid item xs="2">
                            </Grid>
                            <Grid item xs='9.5'>
                                <Box sx={{ mt: 2, borderBottom: 1, borderColor: 'primary.main', borderWidth: 3 }}>
                                </Box>
                                <Box sx={{ mt: 1.75, mr: 1.75 }}>
                                    <SocialIcons />
                                </Box>
                            </Grid>
                            <Grid item xs='0.5'>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs='0.5'>
                </Grid>
                <Grid item xs='5.5'>
                    <Avatar src='/static/josh.jpg' sx={{ height: 500, width: 500 }} />
                </Grid>
            </Grid>
        </Paper>
    );
}