import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link } from "@chakra-ui/core";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import comtalyst_hidden from '../media/comtalyst_hidden.png';

import Title from '../components/Title.js';

function Contact() {
  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column'>
      <Title text='Contact'/>
      <Flex mx='20px' direction='column'>
        <Text lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center' flexWrap='wrap'>
          Want to know more? Want to proof those records? Comments and Criticism?<br/>All are welcome! Just contact me!
        </Text>
        <br/>
        <Flex justifyContent='center' alignItems='center' wrap='wrap'>
          <Text fontSize='lg' lineHeight='taller' letterSpacing='widest' fontWeight='light' textAlign='center'>
            Mr. Rawin (Robin) Deeboonchai
          </Text>
          <Text fontSize='lg' lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center' color='gray.400' fontWeight='b'>
            &nbsp;/&nbsp;
          </Text>
          <Text fontSize='lg' lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center'>
            นาย รวินท์ ดีบุญชัย
          </Text>
        </Flex>
        <Flex justifyContent='center' alignItems='center' wrap='wrap'>
          <Flex alignItems='center'>
            <Box as={FaMapMarkerAlt} size='15px' mx='10px' />
            <Text fontSize='lg' lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center'>
              Bangkok, Thailand (Summer)
            </Text>
          </Flex>
          <Text fontSize='lg' lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center' color='gray.400' fontWeight='b'>
            &nbsp;/&nbsp;
          </Text>
          <Flex alignItems='center'>
            <Box as={FaMapMarkerAlt} size='15px' mx='10px' ml='2px'/>
            <Text fontSize='lg' lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center'>
              Madison, WI, USA
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent='center' alignItems='center'>
          <Box as={FaEnvelope} size='15px' mx='10px' mt='3px'/>
          <Link fontSize='lg' lineHeight='taller' letterSpacing='wider' fontWeight='light' textAlign='center' isExternal href='mailto:rawin.dbc@outlook.com'>
            rawin.dbc@outlook.com
          </Link>
        </Flex>
        <Flex justifyContent='center' alignItems='center' pt='30px'>
          <Link isExternal href='https://www.facebook.com/comtalyst'><Box as={FaFacebook} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://github.com/comtalyst'><Box as={FaGithub} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.instagram.com/pun_rawin'><Box as={FaInstagram} size='30px' mx='10px'/></Link>
          <Link isExternal href='https://www.linkedin.com/in/rawin-deeboonchai-41619a197/'><Box as={FaLinkedin} size='30px' mx='10px'/></Link>
        </Flex>
        <Flex pt='20px' mx='-20px' mb='-40px'>
          <Link isExternal href='https://www.youtube.com/watch?v=hB8S6oKjiw8'><Image src={comtalyst_hidden} alt='logo' size='30px' mx='10px'/></Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact