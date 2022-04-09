import React from 'react';
import {Text, Box, Flex, Image, Link } from "@chakra-ui/core";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import comtalyst_hidden from '../../media/comtalyst_hidden.png';

import { Title, TextMedium } from '../../components/Texts.js';

function Contact(props) {
  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' {...props}>
      <Title>Contact</Title>
      <Flex mx='20px' direction='column'>
        <TextMedium textAlign='center' flexWrap='wrap'>
          Want to know more? Want to proof those records? Comments and Criticism?<br/>All are welcome! Just contact me!
        </TextMedium>
        <br/>
        <Flex justifyContent='center' alignItems='center' wrap='wrap'>
          <TextMedium textAlign='center'>
            Mr. Rawin (Robin) Deeboonchai
          </TextMedium>
        </Flex>
        <Flex justifyContent='center' alignItems='center' wrap='wrap'>
          <Flex alignItems='center'>
            <Box as={FaMapMarkerAlt} size='15px' mx='10px' ml='2px'/>
            <TextMedium textAlign='center'>
              Madison, WI, USA
            </TextMedium>
          </Flex>
        </Flex>
        <Flex justifyContent='center' alignItems='center'>
          <Box as={FaEnvelope} size='15px' mx='10px' mt='3px'/>
          <Link isExternal href='mailto:comtalyst@outlook.com'>
            <TextMedium textAlign='center'>comtalyst@outlook.com</TextMedium>
          </Link>
        </Flex>
        <Flex justifyContent='center' alignItems='center' pt='30px'>
          <Link isExternal href='https://github.com/comtalyst'><Box as={FaGithub} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.instagram.com/pun_rawin'><Box as={FaInstagram} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.linkedin.com/in/rawin-dbc/'><Box as={FaLinkedin} size='30px' mx='10px'/></Link>
        </Flex>
        <Flex pt='20px' mx='-20px' mb='-40px'>
          <Link isExternal href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><Image src={comtalyst_hidden} alt='logo' size='30px' mx='10px'/></Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact