import { Grid} from '@mui/material';
import React from 'react';

import { Card, Button } from 'react-bootstrap';

import BookingForm from '../BookingForm/BookingForm';


const Booking = ({product}) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const {name, img, price, details}=product
    return (
      
           <>  <Grid item xs={12} sm={6} md={4}>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>{price}</Card.Title>
    <Card.Text>
    {details}
    </Card.Text>
  <Button onClick={handleBookingOpen} variant="warning">Buy Now</Button>
  </Card.Body>
</Card>
 </Grid>
 <BookingForm
 product={product}
 openBooking={openBooking}
 handleBookingClose={handleBookingClose}
 ></BookingForm>
 </>
       
    );
};

export default Booking;