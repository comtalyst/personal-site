import React from 'react';
import {Text, Box, Flex, Image, Grid } from "@chakra-ui/core";
import portrait from '../media/portrait.png';

import Title from '../components/Title.js';

function Profile() {
  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column'>
      <Title text='Hello There!'/>
      <Grid templateColumns={{ base: "1fr", md: "minmax(0px, 150px) minmax(300px, auto) minmax(300px, auto) minmax(0px, 150px)"}} columnGap='3.5rem'>
        <Box></Box>
        <Flex justifyContent='center'pt='1.5rem' mx='20px'>
          <Image src={portrait} alt='Portrait' size='500px' objectFit='cover' borderRadius='5px' shadow='5px 5px #00000030'/>
        </Flex>
        <Flex justifyContent='center' marginTop='-0.5rem' pt='1.5rem' mx='20px'>
          <Flex maxW='500px' wrap='wrap' direction='column'>
            <Text lineHeight='taller' letterSpacing='wider' fontWeight='light' flexWrap='wrap'>
              My name is Rawin Deeboonchai, nicknamed Pun.
              But I usually let people call me <span style={{color: '#63B3ED', fontWeight:'bold'}}>Robin</span> for the sake of simplicity.<br/>
            </Text>
            <Text lineHeight='taller' letterSpacing='wider' fontWeight='light' flexWrap='wrap' mt='1rem'>
              <span style={{color: '#2A69AC', fontWeight:'bold'}}>comtalyst</span> is my digital codename, originate from the word "computing" and "catalyst."
            </Text>
            <Text lineHeight='taller' letterSpacing='wider' fontWeight='light' flexWrap='wrap' mt='1rem'>
              Bangkok, Thailand is my hometown. 
              However, I am currently pursuing my undergraduate degree in the United States 
              at the University of Wisconsin-Madison as a Sophomore.
            </Text>
            <Text lineHeight='taller' letterSpacing='wider' fontWeight='light' flexWrap='wrap' mt='1rem'>
              My biggest passion and dreams always are around computing and digital technologies since I was very young.
              That prompts me to pursue my career in Computer Science and Data Science since years ago and from now on.
              Current specific interests of mine in those fields are Artificial Intelligence, Machine Learning, and Web Development.
            </Text>
          </Flex>
        </Flex>
        <Box></Box>
      </Grid>
    </Flex>
  )
}

export default Profile;