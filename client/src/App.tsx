import './App.css';

import React, { useEffect } from 'react';

import logo from './logo.svg';
import { useState } from 'react';

const product=[
  {name:'product111',price:10},
  {name:'product222',price:190},
  {name:'product222',price:190},
  
]

function App() {
  const [product,setProduct]=useState([
    {name:'product111',price:10},
    {name:'product222',price:190},
    {name:'product22',price:190},
    
  ]);
  useEffect(()=>{
    fetch('https://localhost:44341/api/Products')
    .then(response=>
      response.json())
    .then(data=>setProduct(data))
  },[])
  function AddProduct()
  {
    setProduct([...product,{name:'product4',price:4}])
  }

  return (
    <div className="App">
 <h1>{
 product.map((items,index)=>(
   <li key={index}>{items.name} - {items.price}</li>
 ))
 }
 <button onClick={AddProduct}>Add Product</button>
 </h1>
    </div>
  );
}

export default App;
