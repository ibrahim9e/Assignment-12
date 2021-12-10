import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/banner1 (1).jpg'
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box'; 
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/bottombanner1 (1).jpeg'        
import banner2 from '../../../images/bottombanner1 (2).jpeg'        
import banner3 from '../../../images/bottombanner1 (3).jpeg'        
        

const bannerBg = {
    background: `url(${bg})`,
    

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}    

     

const BottomBanner = () => {
    return (
       < div style={{marginTop:'50px'}}>
       <h1>Make A  <span style={{ fontFamily: 'cursive', color:'orange'}}>Enjoyable Cycling on Holiday!</span></h1>
       <hr style={{width:'30%',color:'green', marginLeft:'35%', marginBottom:'100px'}} />
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                         <span style={{ fontFamily: 'cursive', color:'orange'}}>Enjoyable Cycling !</span> <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 20, fontWeight: 300, color: 'dark' }}>
                        Go under the "fonts" section at the top of the homepage, and there are different categories that you can choose from.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(108,117,125)' }}>Get Started</Button>
                    </Box>
                </Grid>
            <Grid item xs={12} md={6} style={verticalCenter} >
            <div className="banner">
         <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
     <div  id ="carousel">
     <h1>Enjoying Holiday </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
     <div  id ="carousel">
     <h1>Enyoying Friday</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <div id="carousel">
      <h1>Enjoying Leisure Time</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
         </div>
                </Grid>
                           

            </Grid>
        </Container>
       </div>
    );
};

export default BottomBanner;