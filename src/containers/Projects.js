import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse } from "@chakra-ui/core";

import uw_logo from '../media/uw_logo.png';
import gs_logo from '../media/gs_logo.png';

import Title from '../components/Title.js';

function Projects() {
  const projects=[
    {
      name: 'Personal Portfolio Website',
      color: 'blue.100',
      desc: 'The website you are currently viewing!',
      year: 'Jul 2020',
      keywords: ['React', 'JavaScript', 'HTML5 & CSS3', 'Chakra UI'],
      logo: 'n/a'
    }
  ]

  const [show, setShow] = React.useState(Array(projects.length).fill(false));        // collapsible project list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' bg='trans.gray'>
      <Title text='Projects'/>
      {
        projects.map((project, idx) => {
          const {name, color, desc, year, keywords, logo} = project
          return (<Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px' pt='1.5rem'>
            <Flex mx='20px'>
              {
                logo === 'n/a'?
                (<Box h='100px' w='100px' mr='10px'></Box>):
                (<Image src={logo} alt='logo' size='100px' objectFit='contain' mr='10px'/>)
              }
              <Flex direction='column'>
                <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light' color={color}>
                  {name}
                </Text>
                <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light'>
                  {desc}
                </Text>
                <Button
                  variant='ghost' color='white'
                  _hover={{bg: '#FFFFFF10'}} rounded='3px'
                  _active={{ transform: 'scale(0.9)'}}
                  _focus={{ boxShadow: '0 0 0 0'}}
                  rightIcon="chevron-down"
                  w='fit-content'
                  pl='0'
                  onClick={() => handleToggle(idx)}
                >
                  Keywords
                </Button>
                <Collapse mt={1} isOpen={show[idx]}>
                  {keywords.map(keyword => (
                    <Text fontSize='l' lineHeight='tall' letterSpacing='wider' fontWeight='light'><li>{keyword}</li></Text>
                  ))}
                </Collapse>
              </Flex>
            </Flex>
            <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light' mx='20px' textAlign='right'>
              {year}
            </Text>
          </Grid>)
        })
      }
    </Flex>
  )
}

export default Projects;