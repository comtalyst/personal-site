import React, {useRef} from 'react';

import { CSSReset, Box } from '@chakra-ui/core'

import NavigationBar from '../components/NavigationBar.js';
import Landing from '../containers/Landing.js';
import Profile from '../containers/Profile.js';
import Education from '../containers/Education.js';
import Skills from '../containers/Skills.js';
import Projects from '../containers/Projects.js';
import Experiences from '../containers/Experiences.js';
import Honors from '../containers/Honors.js';
import Contact from '../containers/Contact.js';

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
      <CSSReset />
      <NavigationBar scrollTo={scrollTo} names={['Profile', 'Education', 'Skills', 'Projects', 'Experiences', 'Honors', 'Contact']}/>
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
      <Projects/>
      <hr/>
      <div ref={ref['Experiences']}></div>
      <Experiences/>
      <hr/>
      <div ref={ref['Honors']}></div>
      <Honors/>
      <hr/>
      <div ref={ref['Contact']}></div>
      <Contact/>
    </Box>
  );
}

export default Home;
