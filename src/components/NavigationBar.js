import React from 'react';
import { Button, Text, Flex } from "@chakra-ui/core";

function NavigationBar() {
  return (
    <Flex>
      <Flex h='4rem'></Flex>
      <Flex bg='reactDark' w='100%' color='white' py='0' justifyContent='space-between' px='1.5rem' h='4rem' 
        alignItems='center' position='fixed'
      >
        <Flex>
          <Text fontSize='xl' letterSpacing='widest' fontWeight='light'>
            Rawin (
          </Text>
          <Text fontSize='xl' letterSpacing='widest' fontWeight='bold' color='blue.400'>
            Robin 
          </Text>
          <Text fontSize='xl' letterSpacing='widest' fontWeight='light'>
            ) Deeboonchai
          </Text>
        </Flex>
        <Flex h='100%'>
          <Button
            variant='ghost' color='white'
            _hover={{bg: '#FFFFFF10'}} rounded='1px' h='100%'
            _active={{ transform: 'scale(0.9)'}}
            _focus={{ boxShadow: '0 0 0 0'}}
          >
            Profile
          </Button>
          <Button
            variant='ghost' color='white'
            _hover={{bg: '#FFFFFF10'}} rounded='1px' h='100%'
            _active={{ transform: 'scale(0.9)'}}
            _focus={{ boxShadow: '0 0 0 0'}}
          >
            Education
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavigationBar;