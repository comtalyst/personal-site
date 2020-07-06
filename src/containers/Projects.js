import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";

import uw_logo from '../media/uw_logo.png';
import gs_logo from '../media/gs_logo.png';

import Title from '../components/Title.js';

function Projects() {

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
      <Flex justifyContent='center' flexWrap='wrap'>
        {
          getBoxes(skills)
        }
      </Flex>
    )
  }

  const projects=[
    {
      name: 'Personal Portfolio Website',
      color: 'blue.100',
      desc: 'The website you are currently viewing!',
      year: 'Jul 2020',
      keywords: ['Front-End Development', 'React', 'JavaScript', 'HTML5 & CSS3', 'Chakra UI'],
      link: 'https://comtalyst.com',
      source: 'https://github.com/comtalyst/personal-site',
      logo: 'n/a'
    },
    {
      name: 'Personal Portfolio Website',
      color: 'blue.100',
      desc: 'The website you are currently viewing!',
      year: 'Jul 2020',
      keywords: ['Front-End Development', 'React', 'JavaScript', 'HTML5 & CSS3', 'Chakra UI'],
      link: 'https://comtalyst.com',
      source: 'https://github.com/comtalyst/personal-site',
      logo: 'n/a'
    },
    {
      name: 'Personal Portfolio Website',
      color: 'blue.100',
      desc: 'The website you are currently viewing!',
      year: 'Jul 2020',
      keywords: ['Front-End Development', 'React', 'JavaScript', 'HTML5 & CSS3', 'Chakra UI'],
      link: 'https://comtalyst.com',
      source: 'https://github.com/comtalyst/personal-site',
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
          const {name, color, desc, year, keywords, link, source, logo} = project
          return (
          <Box>
            {               // Divider between project rows
              idx !== 0? 
              (<Divider border='2px solid' borderColor='gray.500' ml='30px' mr='20px' my='1.5rem'/>)
              :(<Box h='0' w='0' my='1.5rem'></Box>)
            }
            <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px'>
              <Flex mx='20px'>
                {
                  logo === 'n/a'?
                  (<Box h='0' w='0' mr='10px'></Box>):
                  (<Image src={logo} alt='logo' size='100px' objectFit='contain' mr='10px'/>)
                }
                <Flex direction='column'>
                  <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light' color={color}>
                    {name}
                  </Text>
                  <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light'>
                    {desc}
                  </Text>
                  <Flex alignItems='center'>
                    <Button
                      variant='ghost' color='white'
                      _hover={{bg: '#FFFFFF10'}} rounded='3px'
                      _active={{ transform: 'scale(0.9)'}}
                      _focus={{ boxShadow: '0 0 0 0'}}
                      rightIcon="chevron-down"
                      w='fit-content'
                      pl='0'
                      pr = '2'
                      onClick={() => handleToggle(idx)}
                    >
                      Technologies
                    </Button>
                    {
                      link == 'n/a'?
                      (<Box h='0' w='0'></Box>):
                      (<Link href={link} isExternal mx='5px' color='blue.300'>
                        Link <Icon name="external-link" mx="1px" />
                      </Link>)
                    }
                    {
                      source == 'n/a'?
                      (<Box h='0' w='0'></Box>):
                      (<Link href={source} isExternal mx='5px' color='blue.300'>
                        Source <Icon name="external-link" mx="1px" />
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
          </Box>
          )
        })
      }
    </Flex>
  )
}

export default Projects;