import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none' }}>
            <Grid container>
                <Grid item xs='3'>
                </Grid>
                <Grid item xs='6'>
                    <Toolbar>
                        <Typography variant="h6" sx={{ mr: 3 }}>ABOUT ME</Typography>
                        <Typography variant="h6" sx={{ ml: 3, mr: 3 }}>SKILLS</Typography>
                        <Typography variant="h6" sx={{ ml: 3, mr: 3 }}>WORK EXPERIENCE</Typography>
                        <Typography variant="h6" sx={{ ml: 3, mr: 3 }}>PORTFOLIO</Typography>
                        <Typography variant="h6" sx={{ ml: 3 }}>CONTACT</Typography>
                    </Toolbar>
                </Grid>
                <Grid item xs='3'>
                </Grid>
            </Grid>
        </AppBar>
    );
} 