import * as React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function SkillsLists() {
    return (
        <Grid container columnSpacing={3}>
            <Grid item xs='4'>
                <Card>
                    <CardContent>
                        <Typography variant='h6' fontWeight='bold'>Languages</Typography>
                        <Typography variant='body1'>Python</Typography>
                        <Typography variant='body1'>Java</Typography>
                        <Typography variant='body1'>C++</Typography>
                        <Typography variant='body1'>JavaScript</Typography>
                        <Typography variant='body1'>HTML</Typography>
                        <Typography variant='body1'>CSS</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs='4'>
                <Card>
                    <CardContent>
                        <Typography variant='h6' fontWeight='bold'>Frameworks</Typography>
                        <Typography variant='body1'>React.js</Typography>
                        <Typography variant='body1'>Express.js</Typography>
                        <Typography variant='body1'>Bootstrap</Typography>
                        <Typography variant='body1'>JUnit</Typography>
                        <Typography variant='body1'>CppUTest</Typography>
                        <Typography variant='body1'>Boost Meta State Machine</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs='4'>
                <Card>
                    <CardContent>
                        <Typography variant='h6' fontWeight='bold'>Technical Skills</Typography>
                        <Typography variant='body1'>MongoDB</Typography>
                        <Typography variant='body1'>Node.js</Typography>
                        <Typography variant='body1'>Git</Typography>
                        <Typography variant='body1'>AWS Amplify</Typography>
                        <Typography variant='body1'>Linux</Typography>
                        <Typography variant='body1'>Agile/Scrum</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}