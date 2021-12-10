import { Grid, Container } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Service from '../Home/Service/Service';


const Services = () => {
  const [products, setProducts]=useState([])
  useEffect(()=>{
      fetch('https://damp-garden-43037.herokuapp.com/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])
    return (
        <Container style={{marginTop:'100px'}}>
            <h1>Available Products</h1>
            <hr style={{width:'30%', marginLeft:'35%'}} />
            <Grid  style={{marginTop:'20px'}} container spacing={5}>
             {
                 products.map(product=><Service
                 key={product.id}
                 product={product}
                 ></Service>)
             }
       </Grid>
        </Container>
    );
};

export default Services;