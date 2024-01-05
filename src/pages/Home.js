import * as React from 'react';
import { Grid } from '@mui/material';
import NameCard from '../components/NameCard';
import AboutMeCard from '../components/AboutMeCard';
import SkillsCard from '../components/SkillsCard';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <Box sx={{ mt: 9 }}>
            <Grid container spacing={9}>
                <Grid item xs='1'>
                </Grid>
                <Grid item xs='10'>
                    <NameCard />
                </Grid>
                <Grid item xs='1'>
                </Grid>
                <Grid item xs='1'>
                </Grid>
                <Grid item xs='10'>
                    <AboutMeCard />
                </Grid>
                <Grid item xs='1'>
                </Grid>
                <Grid item xs='1'>
                </Grid>
                <Grid item xs='10'>
                    <SkillsCard />
                </Grid>
                <Grid item xs='1'>
                </Grid>
            </Grid>
        </Box>
    );
}