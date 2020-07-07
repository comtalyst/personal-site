import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link } from "@chakra-ui/core";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import scene from '../media/scene1.jpg';

import Title from '../components/Title.js';

function Landing() {
  return (
    <Flex w='100%' h={window.innerHeight - 64} bgImage={"url(" + scene + ")"} bgRepeat="no-repeat" bgSize='cover'>
    <Flex w='100%' pb='3rem' pt='1rem' h='100%' direction='column' alignItems='center' justifyContent='center' bg='bgCover'>
      <Flex mx='20px' direction='column' justifyContent='center' h='100%'>
        <Title text='Welcome! test'/>
        <Flex justifyContent='center' alignItems='center'>
          <Text fontSize='xl' lineHeight='taller' letterSpacing='widest' fontWeight='light' textAlign='center'>
            This is the portfolio of&nbsp;
          </Text>
          <Text fontSize='xl' lineHeight='taller' letterSpacing='widest' fontWeight='light' textAlign='center' color='blue.300'>
            Robin D
          </Text>
          <Text fontSize='xl' lineHeight='taller' letterSpacing='widest' fontWeight='light' textAlign='center'>
            .
          </Text>
        </Flex>
        
        <Flex justifyContent='center' alignItems='center' pt='30px'>
          <Link isExternal href='https://www.facebook.com/comtalyst'><Box as={FaFacebook} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://github.com/comtalyst'><Box as={FaGithub} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.instagram.com/pun_rawin'><Box as={FaInstagram} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.linkedin.com/in/rawin-deeboonchai-41619a197/'><Box as={FaLinkedin} size='30px' mx='10px'/></Link>
        </Flex>
      </Flex>
      <Flex mx='20px' direction='column' justifyContent='flex-end'>
        <Text lineHeight='taller' letterSpacing='widest' fontWeight='light' textAlign='center' color='gray.400'>
          Scroll down or use the navigation bar above to begin
        </Text>
      </Flex>
    </Flex></Flex>
  )
}

export default Landing;