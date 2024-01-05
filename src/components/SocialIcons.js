import * as React from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import Tooltip from '@mui/material/Tooltip';


export default function SocialIcons() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer')
    }

    return (
        <Grid container>
            <Grid item xs='7'>
            </Grid>
            <Grid item xs='2'>
                <Tooltip title='LinkedIn'>
                    <IconButton onClick={() => openInNewTab('https://www.linkedin.com/in/josh-hager/')} sx={{ height: 70, width: 70 }}>
                        <LinkedInIcon sx={{ height: 50, width: 50 }} />
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item xs='2'>
                <Tooltip title='GitHub'>
                    <IconButton onClick={() => openInNewTab('https://github.com/joshhager603')} sx={{ height: 70, width: 70 }}>
                        <GitHubIcon sx={{ height: 50, width: 50 }} />
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item xs='1'>
                <Tooltip title='Resume'>
                    <IconButton onClick={() => openInNewTab('./static/resume.pdf')} sx={{ height: 70, width: 70 }}>
                        <DescriptionIcon sx={{ height: 50, width: 50 }} />
                    </IconButton>
                </Tooltip>
            </Grid>

        </Grid>
    );
}