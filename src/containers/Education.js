import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Badge } from "@chakra-ui/core";

import uw_logo from '../media/uw_logo.png';
import gs_logo from '../media/gs_logo.png';

function Education() {
  const schools=[
    {
      name: 'University of Wisconsin-Madison',
      color: 'red.100',
      desc: 'B.S. in Computer Science and Data Science',
      year: '2019 - 2023',
      logo: uw_logo
    },
    {
      name: 'George School, PA',
      color: 'green.100',
      desc: 'Diploma with Honor Roll and Head of School’s List',
      year: '2018 - 2019',
      logo: gs_logo
    }
  ]
  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' bg='trans.gray'>
      <Text w='100%' textAlign='center' fontSize='5xl'>
        Education
      </Text>
      {
        schools.map(school => {
          const {name, color, desc, year, logo} = school
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