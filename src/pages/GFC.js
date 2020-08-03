import React, {useRef} from 'react';

import { useHistory } from "react-router-dom";

import { CSSReset, Box } from '@chakra-ui/core'

import NavigationBar from '../components/NavigationBar.js';
import Contact from '../containers/Contact.js';

import grad from '../media/grad.png';

function Home() {
  const history = useHistory()

  const ref = {
    "Contact": useRef(null)
  }

  const navClick = (compName) => {
    if(compName === 'Contact'){
      window.scrollTo(0, ref[compName].current.offsetTop - 64) 
    }
    else{
      history.push("/home");
    }
  }
  return (
    <Box bg='gray.700' color='white' bgImage={"url(" + grad + ")"} bgRepeat="no-repeat" bgSize='100% 100%'>
      <CSSReset />
      <NavigationBar navClick={navClick} names={['Profile', 'Education', 'Skills', 'Projects', 'Experiences', 'Honors', 'Contact']}/>
      <hr/>
      <div ref={ref['Contact']}></div>
      <Contact/>
    </Box>
  );
}

export default Home;
