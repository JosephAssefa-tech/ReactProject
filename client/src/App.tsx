import './App.css';

import React from 'react';
import logo from './logo.svg';

const product=[
  {name:'product111',price:10},
  {name:'product222',price:190},
  {name:'product222',price:190},
  
]

function App() {
  return (
    <div className="App">
 <h1>{
 product.map((items,index)=>(
   <li key={index}>{items.name} - {items.price}</li>
 ))
 }
 
 </h1>
    </div>
  );
}

export default App;
