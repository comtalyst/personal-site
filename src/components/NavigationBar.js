import React from 'react';
import { Button, Box, Text, Flex } from "@chakra-ui/core";

function NavigationBar() {
  return (
    <Flex bg='reactDark' w='100%' color='white' py='0' justifyContent='space-between' px='1.5rem' h='4rem' alignItems='center'>
      <Flex>
        <Text fontSize='xl'>
          Rawin (Robin) Deeboonchai
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
  )
}

export default NavigationBar;