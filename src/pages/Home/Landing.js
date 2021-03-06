import React from 'react';
import { Text, Box, Flex, Link } from "@chakra-ui/core";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import scene from '../../media/scene1.jpg';

import { Title, TextBig, TextMedium } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock';
import {barHeight} from '../../containers/NavigationBar';
import BackgroundContainer from '../../containers/BackgroundContainer';

 // expect to use with NavBar
function Landing(props) {
  return (
    <BackgroundContainer bg={scene} h={window.innerHeight - barHeight} {...props}>
    <ShowBlock justifyContent='center' bg='bgCover'>
      <Flex mx='10px' direction='column' justifyContent='center' h='100%'>
        <Title>Welcome!</Title>
        <TextBig letterSpacing='widest' lineHeight='taller' textAlign='center'>
          This is the portfolio of <span style={{color: '#63B3ED'}}>Robin D.</span>
        </TextBig>
        
        <Flex justifyContent='center' alignItems='center' pt='30px'>
          <Link isExternal href='https://www.facebook.com/comtalyst'><Box as={FaFacebook} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://github.com/comtalyst'><Box as={FaGithub} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.instagram.com/pun_rawin'><Box as={FaInstagram} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.linkedin.com/in/rawin-dbc/'><Box as={FaLinkedin} size='30px' mx='10px'/></Link>
        </Flex>
      </Flex>
      <TextMedium letterSpacing='widest' textAlign='center' color='gray.400' mx='10px'>
        Scroll down or use the navigation bar above to begin
      </TextMedium>
    </ShowBlock></BackgroundContainer>
  )
}

export default Landing;