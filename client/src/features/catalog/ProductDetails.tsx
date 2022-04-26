import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Product } from "../../app/layout/models/product";
import agent from "../../app/layout/api/agent";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetails()
{
    const {id} = useParams<{id:string}>();
    const [product,setProduct]=useState<Product | null>();
    const [loading,setLoading]=useState(true);
    


    useEffect(()=>{
       agent.Catalog.details(parseInt(id))
        .then(response=>setProduct(response.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))

    },[id])//the id is called dependency

    if(loading) return <h2>LOading</h2>
    if(!product) return <h2>product</h2>
    return(
 <Grid container spacing={6}>
     <Grid item xs={6}>
         <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}} />
         
     </Grid>
     <Grid item xs={6}>
         <Typography variant='h3'>{product.name}</Typography>
         <Divider sx={{mb:2}}/>
         <Typography variant='h4' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
         <TableContainer>
             <Table>
                 <TableBody>
                     <TableRow>
                         <TableCell>Name</TableCell>
                         <TableCell>{product.name}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell>Description</TableCell>
                         <TableCell>{product.description}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell>Type</TableCell>
                         <TableCell>{product.type}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell>Brand</TableCell>
                         <TableCell>{product.brand}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell>Quantity in stock</TableCell>
                         <TableCell>{product.quantityInStock}</TableCell>
                     </TableRow>
                 </TableBody>
             </Table>
         </TableContainer>
     </Grid>
 </Grid>
    )
}

