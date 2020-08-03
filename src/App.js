import React from 'react';
import './App.css';

import customTheme from './CustomTheme.js'
import { ThemeProvider } from '@chakra-ui/core'

import Home from './pages/Home.js';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
     <Home/>
    </ThemeProvider>
  );
}

export default App;
