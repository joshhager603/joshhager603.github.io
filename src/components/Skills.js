import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SkillsLists from './SkillsLists';

export default function Skills() {
    return (
        <Box sx={{mt: 6}}>
            <Grid container>
            <Grid item xs='3.5'>
                </Grid>
                <Grid item xs='5'>
                    <Typography fontWeight='bold' variant='h4'>My Skills</Typography>
                </Grid>
                <Grid item xs='3.5'>
                    <h1>being the best boyfriend in the world to my gf</h1>
                </Grid>
                <Grid item xs='3'>
                </Grid>
                <Grid item xs='6'> 
                    <Box sx={{mt: 2}}>
                        <SkillsLists />
                    </Box>
                </Grid>
                <Grid item xs='3'>
                </Grid>
            </Grid>
        </Box>
    );
}