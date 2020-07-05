import React from 'react';
import { Button, Text, Box, Flex, Image, Grid } from "@chakra-ui/core";
import uw_logo from '../media/uw_logo.png';

function Education() {
  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' bg='trans.gray'>
      <Text w='100%' textAlign='center' fontSize='5xl'>
        Education
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px' pt='1.5rem'>
        <Flex mx='20px'>
          <Image src={uw_logo} alt='logo' size='100px' objectFit='contain' mr='10px'/>
          <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light'>
            University of Wisconsin-Madison <br/>B.S. in Computer Science and Data Science
          </Text>
        </Flex>
        <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light' mx='20px' textAlign='right'>
          2019-2023
        </Text>
      </Grid>
    </Flex>
  )
}

export default Education;