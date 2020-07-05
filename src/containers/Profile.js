import React from 'react';
import { Button, Text, Box, Flex, Image, Grid } from "@chakra-ui/core";
import portrait from '../media/portrait.jpg';

import Title from '../components/Title.js';

function Profile() {
  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column'>
      <Title text='Hello There!'/>
      <Grid templateColumns={{ base: "1fr", md: "minmax(0px, 150px) minmax(300px, auto) minmax(300px, auto) minmax(0px, 150px)"}} columnGap='3.5rem'>
        <Box></Box>
        <Flex justifyContent='center'pt='1.5rem' mx='20px'>
          <Image src={portrait} alt='Portrait' size='500px' objectFit='cover' borderRadius='5px'/>
        </Flex>
        <Flex justifyContent='center' marginTop='-0.5rem' pt='1.5rem' mx='20px'>
          <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light' maxW='500px'>
          Hooks are a more direct way to use the React features you already know — such as state, lifecycle, context, and refs. They don’t fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant.
          (This is dummy text, but in English)
          </Text>
        </Flex>
        <Box></Box>
      </Grid>
    </Flex>
  )
}

export default Profile;