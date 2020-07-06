import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";

function ShowList(props) {
  const {rows, collapseTitle} = props
  const defaultColor = 'blue.100'

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

  const [show, setShow] = React.useState(Array(rows.length).fill(false));        // collapsible row list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return rows.map((row, idx) => {
    const {name, color, desc, year, keywords, link, source, extras} = row
    return (
    <Box>
      {               // Divider between row rows
        idx !== 0? 
        (<Divider border='2px solid' borderColor='gray.500' ml='30px' mr='20px' my='1.5rem'/>)
        :(<Box h='0' w='0' my='1.5rem'></Box>)
      }
      <Flex direction='column'>
        <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px'>
          <Flex mx='20px'>
            <Flex direction='column' ml='10px'>
              <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light' color={color !== null && color !== undefined? color:defaultColor}>
                {name}
              </Text>
              {
                desc !== null && desc !== undefined?
                (<Text fontSize='l' lineHeight='tall' letterSpacing='wider' fontWeight='light' maxW='1000px'>
                  {desc}
                </Text>):
                (<Box h='0' w='0'></Box>)
              }
              <Flex alignItems='center'>
                {
                  collapseTitle !== null && collapseTitle !== undefined && keywords !== undefined && keywords !== null?
                  (<Button
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
                    {collapseTitle}
                  </Button>):
                  (<Box h='0' w='0'></Box>)
                }
                {
                  link == null || link == undefined || link == 'n/a'?
                  (<Box h='0' w='0'></Box>):
                  (<Link href={link} isExternal mx='5px' color='blue.300'>
                    Link <Icon name="external-link" mx="1px" />
                  </Link>)
                }
                {
                  source == null || source == undefined || source == 'n/a'?
                  (<Box h='0' w='0'></Box>):
                  (<Link href={source} isExternal mx='5px' color='blue.300'>
                    Source <Icon name="external-link" mx="1px" />
                  </Link>)
                }
              </Flex>
              <Collapse mt={1} isOpen={show[idx]}>
                {
                  keywords !== undefined && keywords !== null?
                  getSkillContainer(keywords):
                  (<Box h='0' w='0'></Box>)
                }
              </Collapse>
            </Flex>
          </Flex>
          {
            year !== null?
            (<Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light' mx='20px' textAlign='right'>
              {year}
            </Text>):
            (<Box h='0' w='0'></Box>)
          }
        </Grid>
        {extras !== null && extras !== undefined? extras:(<Box h='0' w='0'></Box>)}
      </Flex>
    </Box>
    )
  })
        
}

export default ShowList;