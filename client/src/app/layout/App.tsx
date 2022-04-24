import './App.css';

import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/catalog';
import ContactPage from '../../features/contact/ContactPage';
import Header from './Header';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';

function App() {
  const theme=createTheme(
    {
      palette:{
        mode:'light'
      }
    }
  )



  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    
     <Header />
     <Container>
     <Routes>
    <Route path='/'>{HomePage}</Route>
    <Route path='/catalog'>{Catalog}</Route>  
    <Route path='/catalog/:id'>{ProductDetails}</Route>
    <Route path='/about'  >{AboutPage}</Route>
    <Route path='/contact'>{ContactPage} </Route>  
    </Routes>
     </Container>
  
   
    </ThemeProvider>
  );
}

export default App;
