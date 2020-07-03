import React from 'react';
import './App.css';

import customTheme from './CustomTheme.js'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'

import NavigationBar from './components/NavigationBar.js';
import Profile from './components/Profile.js';

const draftStyle = {
  textAlign: 'center'
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box bg='gray.700' color='white'>
        <CSSReset />
        <NavigationBar/>
        <hr/>
        <h2>TL;DR</h2>
        <hr/>
        <Profile/>
        <hr/>
        <h2>Education/Courseworks</h2>
        <hr/>
        <h2>Tech Proficiency</h2>
        <hr/>
        <h2>Projects</h2>
        <hr/>
        <h2>Relevant Experiences</h2>
        <hr/>
        <h2>Honors</h2>
        <hr/>
        <h2>Contact</h2>
      </Box>
    </ThemeProvider>
  );
}

export default App;
