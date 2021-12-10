import { Grid } from '@mui/material';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = ({product}) => {
    const {serviceName, image, price, details}=product
    return (
        <> 
         <Grid item xs={12} sm={6} md={4}>
    
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{serviceName}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
      <Button  variant="warning">Buy Now</Button>
      </Card.Body>
    </Card>
     </Grid>
     
     </>
    );
};

export default Service;