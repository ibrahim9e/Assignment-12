import { Grid } from '@mui/material';
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import contact from '../../../images/login.jpg'

const ContactUs = () => {
    return (
        <div style={{marginTop:'90px'}}>
        <h1>Contact Us </h1>
        <hr style={{width:'30%', marginLeft:'35%'}} />
       <Container style={{marginTop:'80px'}}>
       <Grid container spacing={5}>

                <Grid item  xs={12} md={6}>
                   <img src={contact} alt="" width="90%"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h3>Contact Form</h3>
                    <hr style={{width:'30%', marginLeft:'35%'}} />
                <Form>
  <Form.Group >
     <Form.Control type="name" placeholder="Name"className="mb-3" />
     </Form.Group>
   <Form.Group >
     <Form.Control type="email" placeholder="email"className="mb-3" />
    
    </Form.Group>
  <Form.Group >
     <Form.Control type="password" placeholder="password"className="mb-3" />
    
    </Form.Group>
  <Form.Group >
     <Form.Control type="number" placeholder="Mobile"className="mb-3" />
    
    </Form.Group>
  <Form.Group >
    <Form.Control as="textarea" rows={3} />    
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </Grid>

            </Grid>
      
       </Container>
</div>
        
    );
};

export default ContactUs;