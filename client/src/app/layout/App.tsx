import './App.css';

import { Container, CssBaseline } from '@mui/material';

import Catalog from '../../features/catalog/catalog';
import Header from './Header';
import { Product } from './models/product';
import { useEffect } from 'react';
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
      description:'some descritpiion added here',
      pictureUrl:'http://picsum.photos/200'
    
    }])
  }

  return (
    <>
    <CssBaseline/>
    
     <Header />
     <Container>
     <Catalog  products={product} addProduct={AddProduct}/> 
     </Container>
    
   
    </>
  );
}

export default App;
