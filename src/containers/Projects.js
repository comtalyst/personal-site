import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";

import shootdown1 from '../media/shootdown1.png';
import shootdown2 from '../media/shootdown2.png';
import shootdown3 from '../media/shootdown3.png';
import shootdown4 from '../media/shootdown4.png';
import shootdown5 from '../media/shootdown5.png';

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
      <Flex justifyContent='left' flexWrap='wrap'>
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
      extras: (<Box h='0' w='0'></Box>)
    },
    {
      name: 'Shootdown',
      color: 'blue.100',
      desc: 'A mobile arcade/abstract tap-to-shoot game; developed with educational objectives.',
      year: 'Jun 2019 - Jan 2020',
      keywords: ['Game Development', 'Object-Oriented Programming', 'Unity 2D', 'C#', 'Google Play Services'],
      link: 'https://play.google.com/store/apps/details?id=com.comtalyst.shootdown',
      source: 'n/a',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={shootdown1} alt='screenshot' h='300px' m='10px' borderRadius='5px'/>
                <Image src={shootdown2} alt='screenshot' h='300px' m='10px' borderRadius='5px'/>
                <Image src={shootdown3} alt='screenshot' h='300px' m='10px' borderRadius='5px'/>
                <Image src={shootdown4} alt='screenshot' h='300px' m='10px' borderRadius='5px'/>
                <Image src={shootdown5} alt='screenshot' h='300px' m='10px' borderRadius='5px'/>
              </Flex>)
    },
    {
      name: 'Luminateer',
      color: 'blue.100',
      desc: 'An Arduino-powered software that makes PattonRobotics OneBot follows the tricolor LED signal.',
      year: 'Mar 2019 - May 2019',
      keywords: ['Robotics & Physical Computing', 'Arduino', 'C'],
      link: 'n/a',
      source: 'https://github.com/comtalyst/Luminateer',
      extras: (<Box h='0' w='0'></Box>)
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
          const {name, color, desc, year, keywords, link, source, extras} = project
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
              {extras}
            </Flex>
          </Box>
          )
        })
      }
    </Flex>
  )
}

export default Projects;