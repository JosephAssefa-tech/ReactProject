import './App.css';

import React, { useEffect } from 'react';

import Catalog from '../../features/catalog/catalog';
import { Product } from './models/product';
import { Typography } from '@mui/material';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [product,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
    fetch('https://localhost:44341/api/Products')
    .then(response=>
      response.json())
    .then(data=>setProduct(data))
  },[])
  function AddProduct()  {
    setProduct(prevState => [...prevState,
      {
      id:prevState.length + 101,
      name:'name'+(prevState.length+1),
      price:(prevState.length*100)+100,
      brand:'brand',
      description:'some descritpiion',
      pictureUrl:'http://picsum.photos/200'
    
    }])
  }

  return (
    <>
      <Typography variant='h1'>Re-Store</Typography>
      <Catalog  products={product} addProduct={AddProduct}/> 
   
    </>
  );
}

export default App;
