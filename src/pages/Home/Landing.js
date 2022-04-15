import React from 'react';
import { Text, Box, Flex, Link, PseudoBox } from "@chakra-ui/core";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import scene from '../../media/scene2.jpg';

import { Title, TextBig, TextMedium } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock';
import {barHeight} from '../../containers/NavigationBar';
import BackgroundContainer from '../../containers/BackgroundContainer';

 // expect to use with NavBar
function Landing(props) {
  return (
    <BackgroundContainer bg={scene} h={window.innerHeight - barHeight} backgroundPosition='bottom' {...props}>
    <ShowBlock justifyContent='center' bg={{base: 'bgCover', md: 'bgCover0'}}>
      <Flex mx='10px' direction='column' justifyContent='center' h='100%'>
        <Title>Welcome.</Title>
        <TextBig letterSpacing='widest' lineHeight='taller' textAlign='center'>
          This is personal website of <span style={{color: '#63B3ED', fontWeight: 'bold'}}>Robin</span>
        </TextBig>
        
        <Flex justifyContent='center' alignItems='center' pt='30px'>
          <Link isExternal href='https://github.com/comtalyst'><PseudoBox as={FaGithub} size='30px' mx='10px' transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.2)'}}/></Link>
          <Link isExternal href='https://www.instagram.com/pun_rawin'><PseudoBox as={FaInstagram} size='30px' mx='10px' transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.2)'}}/></Link>
          <Link isExternal href='https://www.linkedin.com/in/rawin-dbc/'><PseudoBox as={FaLinkedin} size='30px' mx='10px' transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.2)'}}/></Link>
        </Flex>
      </Flex>
      <TextMedium letterSpacing='widest' textAlign='center' color='gray.400' mx='10px'>
        Scroll down or use the navigation bar above to begin
      </TextMedium>
    </ShowBlock></BackgroundContainer>
  )
}

export default Landing;