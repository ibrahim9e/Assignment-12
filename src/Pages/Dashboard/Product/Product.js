import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Product = () => {
    const {user}=useAuth();
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const url =`https://damp-garden-43037.herokuapp.com/products?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure you want to cancel order?');
       if(proceed){
        const url =`https://damp-garden-43037.herokuapp.com/products/${id}`
        fetch(url,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const reaminingProducts = products.filter(product=>product._id !== id);
                setProducts(reaminingProducts)
                alert('Cancel oder successfully')
            }
            
        })
       }
    }
    return (
        <div>
            <h1>Booking Products{products.length}</h1>
             <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                             <TableCell align="right">Picture</TableCell>
                             <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Name}
                                </TableCell>

                                 <TableCell align="right"><img src={row.image} alt="" width="100px" /></TableCell>
                                 <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right"><Button onClick={()=>handleDelete(row._id)}>cencel order</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Product;