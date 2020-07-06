import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";

import Title from '../components/Title.js';

function Honors() {

  // customize stack boxes here
  const getBoxes = (skills) => {
    return skills.map(skill => {
      let color = 'gray.500'
      let bgColor = color
      return (<Box borderWidth='2px' px='5px' py='1px' borderRadius='5px' m='2px' borderColor={color} minWidth='fit-content' bg={bgColor}>
        <Text fontSize='l' lineHeight='tall' letterSpacing='wider' fontWeight='light'>
          {skill}
        </Text>
      </Box>)
    })
  }

  // customize row of boxes here
  const getSkillContainer = (skills) => {
    return(
      <Flex justifyContent='left' flexWrap='wrap'>
        {
          getBoxes(skills)
        }
      </Flex>
    )
  }

  const honors=[
    {
      name: 'Gold Medal, Galactic Olympiad in Informatics 3020',
      color: 'yellow.400',
      desc: 'A formal competitive programming competition to qualify national representatives to the Intergalactic Olympiad in Informatics',
      year: 'Jul 3020',
      keywords: ['Competitive Programming', 'C/C++'],
      link: 'https://comtalyst.com',
      extras: (<Box h='0' w='0'></Box>)
    },
  ]

  const [show, setShow] = React.useState(Array(honors.length).fill(false));        // collapsible project list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' bg='trans.gray'>
      <Title text='Awards and Honors'/>
      {
        honors.map((honor, idx) => {
          const {name, color, desc, year, keywords, link, extras} = honor
          return (
          <Box>
            {               // Divider between project rows
              idx !== 0? 
              (<Divider border='2px solid' borderColor='gray.500' ml='30px' mr='20px' my='1.5rem'/>)
              :(<Box h='0' w='0' my='1.5rem'></Box>)
            }
            <Flex direction='column'>
              <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px'>
                <Flex mx='20px'>
                  <Flex direction='column' ml='10px'>
                    <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light' color={color}>
                      {name}
                    </Text>
                    <Text fontSize='l' lineHeight='tall' letterSpacing='wider' fontWeight='light' maxW='1000px'>
                      {desc}
                    </Text>
                    <Flex alignItems='center'>
                      <Button
                        variant='ghost' color='gray.400'
                        _hover={{bg: '#FFFFFF10'}} rounded='3px'
                        _active={{ transform: 'scale(0.9)'}}
                        _focus={{ boxShadow: '0 0 0 0'}}
                        rightIcon="chevron-down"
                        w='fit-content'
                        pl='0'
                        pr = '2'
                        onClick={() => handleToggle(idx)}
                      >
                        Aspects
                      </Button>
                      {
                        link == 'n/a'?
                        (<Box h='0' w='0'></Box>):
                        (<Link href={link} isExternal mx='5px' color='blue.300'>
                          Link <Icon name="external-link" mx="1px" />
                        </Link>)
                      }
                    </Flex>
                    <Collapse mt={1} isOpen={show[idx]}>
                      {
                        getSkillContainer(keywords)
                      }
                    </Collapse>
                  </Flex>
                </Flex>
                <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light' mx='20px' textAlign='right'>
                  {year}
                </Text>
              </Grid>
              {extras}
            </Flex>
          </Box>
          )
        })
      }
    </Flex>
  )
}

export default Honors;