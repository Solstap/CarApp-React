import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Layout from './components/Layout'

//MUI
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { CarsProvider } from "./components/context/car.context";
import { UIProvider } from "./components/context/UI.context";

//import pages
import CarsList from './pages/List';
import Add from './pages/Add';
import Update from './pages/Update';
import NotFound from './pages/NotFound';



function App() {

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UIProvider>
          <CarsProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<CarsList />} />
                <Route path="/add" element={<Add />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </CarsProvider>
        </UIProvider>
      </ThemeProvider>

    </Router>

  )
}

export default App
