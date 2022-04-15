import './App.css';

import React, { useEffect } from 'react';

import { Product } from './product';
import logo from './logo.svg';
import { useState } from 'react';

const product=[
  {name:'product111',price:10},
  {name:'product222',price:190},
  {name:'product222',price:190},
  
]

function App() {
  const [product,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
    fetch('https://localhost:44341/api/Products')
    .then(response=>
      response.json())
    .then(data=>setProduct(data))
  },[])
  function AddProduct(){
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
