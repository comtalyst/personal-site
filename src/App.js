import React, {useRef} from 'react';
import './App.css';

import customTheme from './CustomTheme.js'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'

import NavigationBar from './components/NavigationBar.js';
import Profile from './components/Profile.js';

function App() {
  const ref = {
    "Profile": useRef(null),
    "Education": useRef(null),
  }

  const scrollTo = (compName) => {
    window.scrollTo(0, ref[compName].current.offsetTop - 64) 
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Box bg='gray.700' color='white'>
        <CSSReset />
        <NavigationBar scrollTo={scrollTo}/>
        <hr/>
        <h2>TL;DR</h2>
        <hr/>
        <div ref={ref['Profile']}></div>
        <Profile/>
        <hr/>
        <div ref={ref['Education']}></div>
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
