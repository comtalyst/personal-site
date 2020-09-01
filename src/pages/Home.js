import React, {useRef} from 'react';

import { Box } from '@chakra-ui/core'

import NavigationBar from '../containers/NavigationBar.js';
import Landing from './Home/Landing.js';
import Profile from './Home/Profile.js';
import Education from './Home/Education.js';
import Skills from './Home/Skills.js';
import Projects from './Home/Projects.js';
import Experiences from './Home/Experiences.js';
import Honors from './Home/Honors.js';
import Contact from './global/Contact.js';

import grad from '../media/grad.png';

function Home() {
  const ref = {
    "Profile": useRef(null),
    "Education": useRef(null),
    "Skills": useRef(null),
    "Projects": useRef(null),
    "Experiences": useRef(null),
    "Honors": useRef(null),
    "Contact": useRef(null),
  }

  const scrollTo = (compName) => {
    window.scrollTo(0, ref[compName].current.offsetTop - 64) 
  }
  return (
    <Box bg='gray.700' color='white' bgImage={"url(" + grad + ")"} bgRepeat="no-repeat" bgSize='100% 100%'> 
      <NavigationBar navClick={scrollTo} names={['Profile', 'Education', 'Skills', 'Projects', 'Experiences', 'Honors', 'Contact']}/>
      <Landing/>
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
      <div ref={ref['Projects']}></div>
      <Projects bg='trans.gray'/>
      <hr/>
      <div ref={ref['Experiences']}></div>
      <Experiences/>
      <hr/>
      <div ref={ref['Honors']}></div>
      <Honors bg='trans.gray'/>
      <hr/>
      <div ref={ref['Contact']}></div>
      <Contact/>
    </Box>
  );
}

export default Home;
