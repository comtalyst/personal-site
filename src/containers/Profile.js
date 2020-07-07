import React from 'react';
import { Button, Text, Box, Flex, Image, Grid } from "@chakra-ui/core";
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
          <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light' maxW='500px'>
          My name is Rawin Deeboonchai, nicknamed Pun. 
          However, I usually let English speakers call me Robin for the sake of simplicity. 
          </Text>
        </Flex>
        <Box></Box>
      </Grid>
    </Flex>
  )
}

export default Profile;