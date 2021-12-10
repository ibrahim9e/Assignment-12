import React from 'react';
import Grid from '@mui/material/Grid';
import image from '../../../images/banner4.png';
import bg from '../../../images/banner1 (1).jpg'
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, marginTop:'80px' }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                        Your    <span style={{ fontFamily: 'cursive', color:'orange'}}>Cycling Journey</span> <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 20, fontWeight: 300, color: 'dark' }}>
                        Go under the "fonts" section at the top of the homepage, and there are different categories that you can choose from.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(108,117,125)' }}>Get Started</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={image} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;