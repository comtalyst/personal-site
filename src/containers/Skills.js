import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse } from "@chakra-ui/core";

function Skills() {
  const languages = [
    'Javascript', 'Python'  
  ]

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column'>
      <Text w='100%' textAlign='center' fontSize='5xl' letterSpacing='wider' fontWeight='light'>
        Tech Skills
      </Text>
      <Flex pt='1rem' direction='column' px='20px'>
        <Text fontSize='3xl' letterSpacing='wider' fontWeight='light' textAlign='center'>
          Languages
        </Text>
        <Flex pt='1rem' justifyContent='center'>
          {
            languages.map(language =>
              (<Box borderWidth='2px' px='5px' py='1px' borderRadius='5px' mx='2px' borderColor='blue.500'>
                <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light'>
                  {language}
                </Text>
              </Box>)
            )
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Skills;