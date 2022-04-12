import './App.css';

import React from 'react';
import logo from './logo.svg';

const product=[
  {name:'product111',price:10},
  {name:'product222',price:190},
  {name:'product3',price:100},
  {name:'product33',price:100},
  
]

function App() {
  return (
    <div className="App">
 <h1>{product.map(items=>(
   <li>{items.name} - {items.price}</li>
 ))}</h1>
    </div>
  );
}

export default App;
