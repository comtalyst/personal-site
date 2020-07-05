import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse } from "@chakra-ui/core";

import uw_logo from '../media/uw_logo.png';
import gs_logo from '../media/gs_logo.png';

function Education() {
  const schools=[
    {
      name: 'University of Wisconsin-Madison',
      color: 'red.100',
      desc: 'B.S. in Computer Science and Data Science',
      year: '2019 - 2023',
      courses: ['Calculus - Functions of Several Variables', 'Data Programming I', 'Elementary Matrix and Linear Algebra'],
      logo: uw_logo
    },
    {
      name: 'George School, PA',
      color: 'green.100',
      desc: 'Diploma with Honor Roll and Head of School’s List',
      year: '2018 - 2019',
      courses: ['Independent Study in Advanced Programming'],
      logo: gs_logo
    }
  ]

  const [show, setShow] = React.useState(Array(schools.length).fill(false));        // collapsible course list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' bg='trans.gray'>
      <Text w='100%' textAlign='center' fontSize='5xl'>
        Education
      </Text>
      {
        schools.map((school, idx) => {
          const {name, color, desc, year, courses, logo} = school
          return (<Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px' pt='1.5rem'>
            <Flex mx='20px'>
              <Image src={logo} alt='logo' size='100px' objectFit='contain' mr='10px'/>
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
                  Highlighted Courses
                </Button>
                <Collapse mt={1} isOpen={show[idx]}>
                  {courses.map(course => (
                    <Text fontSize='l' lineHeight='tall' letterSpacing='wider' fontWeight='light'><li>{course}</li></Text>
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

export default Education;