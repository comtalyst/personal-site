import React from 'react';
import { Button, Text, Flex } from "@chakra-ui/core";

function NavigationBar(props) {
  const {scrollTo, names} = props
  return (
    <Flex>
      <Flex h='64px'></Flex>
      <Flex bg='reactDark' w='100%' color='white' py='0' justifyContent='space-between' px='1.5rem' h='64px' 
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
        {
          names.map((name) => (
            
              <Button
                variant='ghost' color='white'
                _hover={{bg: '#FFFFFF10'}} rounded='1px' h='100%'
                _active={{ transform: 'scale(0.9)'}}
                _focus={{ boxShadow: '0 0 0 0'}}
                onClick={() => scrollTo(name)}
              >
                {name}
              </Button>
          ))
        }
        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavigationBar;