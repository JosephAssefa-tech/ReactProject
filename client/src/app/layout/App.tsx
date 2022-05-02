import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/catalog';
import ContactPage from '../../features/contact/ContactPage';
import Header from './Header';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

function App() {
  const[darkMode,setDarkMode]=useState(false);
  const platType=darkMode?'dark':'light'
  
  const theme=createTheme(
    {
      palette:{
        mode:platType,
        background:
        {
          default:platType==='light'?'#eaeaea':'#121212'
      }
      }
    }
  )

  function handleThemeChange()
  {
    setDarkMode(!darkMode)
  }



  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
    <CssBaseline/>
    
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
     <Container>
     <Routes>
  
    <Route  path="/" element={<HomePage />}></Route>
    <Route path='/catalog' element={<Catalog/>}></Route>  
    <Route path='/catalog/:id' element={<ProductDetails/>}></Route>
    <Route path='/about'  element={<AboutPage/>}></Route>
    <Route path='/contact' element={<ContactPage/>}> </Route>   
    </Routes>
     </Container>
  
   
    </ThemeProvider>
  );
}

export default App;
