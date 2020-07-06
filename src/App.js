import React, {useRef} from 'react';
import './App.css';

import customTheme from './CustomTheme.js'
import { ThemeProvider, CSSReset, Box, Divider } from '@chakra-ui/core'

import NavigationBar from './components/NavigationBar.js';
import Profile from './containers/Profile.js';
import Education from './containers/Education.js';
import Skills from './containers/Skills.js';
import Projects from './containers/Projects.js';
import Honors from './containers/Honors.js';

function App() {
  const ref = {
    "Profile": useRef(null),
    "Education": useRef(null),
    "Skills": useRef(null),
    "Projects": useRef(null),
  }

  const scrollTo = (compName) => {
    window.scrollTo(0, ref[compName].current.offsetTop - 64) 
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Box bg='gray.700' color='white'>
        <CSSReset />
        <NavigationBar scrollTo={scrollTo} names={['Profile', 'Education', 'Skills', 'Projects', 'Experiences', 'Honors', 'Contact']}/>
        <hr/>
        <h2>TL;DR</h2>
        <hr/>
        <div ref={ref['Profile']}></div>
        <Profile/>
        <hr/>
        <div ref={ref['Education']}></div>
        <Education/>
        <hr/>
        <div ref={ref['Skills']}></div>
        <Skills/>
        <hr/>
        <div ref={ref['Skills']}></div>
        <Projects/>
        <hr/>
        <h2>Relevant Experiences</h2>
        <hr/>
        <div ref={ref['Honors']}></div>
        <Honors/>
        <hr/>
        <h2>Contact</h2>
      </Box>
    </ThemeProvider>
  );
}

export default App;
