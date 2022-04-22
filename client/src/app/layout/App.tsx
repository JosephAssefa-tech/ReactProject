import './App.css';

import { Container, CssBaseline } from '@mui/material';

import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/catalog';
import ContactPage from '../../features/contact/ContactPage';
import Header from './Header';
import HomePage from '../../features/home/HomePage';
import { Product } from './models/product';
import ProductDetails from '../../features/catalog/ProductDetails';
import { Route } from 'react-router-dom';
import { createTheme } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const theme=createTheme(
    {
      palette:{
        mode:'dark'
      }
    }
  )



  return (
    <>
    <CssBaseline/>
    
     <Header />
     <Container>

     </Container>
    
   
    </>
  );
}

export default App;
