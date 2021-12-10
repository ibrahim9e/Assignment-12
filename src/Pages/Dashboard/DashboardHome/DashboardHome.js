import React from 'react';
import { Grid } from '@mui/material';
import Product from '../Product/Product';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={5}>
                       
      </Grid> */}
      <Grid item md={12} xs={12} sm={12}>
         <Product></Product>
     </Grid>
  </Grid>
    );
};

export default DashboardHome;