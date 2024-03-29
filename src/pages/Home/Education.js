import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, PseudoBox } from "@chakra-ui/core";

import uw_logo from './media/uw_logo.png';
import gs_logo from './media/gs_logo.png';
import sk_logo from './media/sk_logo.png';

import scene from '../../media/scene3.jpg';

import { Title, TextBig, TextMedium } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock';
import BackgroundContainer from '../../containers/BackgroundContainer';

/*
NOTE:

TEMPLATE/STRUCTURE OF THIS BLOCK CONTAINER FILE IS THE OLD VERSION, 
WHICH IS MORE UNORGANIZED COMPARED TO OTHER BLOCK CONTAINER FILES.

SINCE VISUAL CHANGES AND REUSAGE IS NOT FREQUENT, 
STRUCTURAL REVISIONING IS NOT EXPECTED IN THE MEANTIME.
*/

function Education(props) {
  const schools=[
    {
      name: 'University of Wisconsin-Madison',
      color: 'red.100',
      desc: 'B.S. in Computer Science and Data Science',
      year: '2019 - May 2023',
      courses: ['Calculus - Functions of Several Variables', 'Data Science Programming', 'Database Management Systems: Design and Implementation',
               'Elementary Matrix and Linear Algebra', 'Introduction to Algorithms', 'Introduction to Artificial Intelligence',
               'Introduction to Computer Engineering', 'Introduction to Data Modelling', 'Introduction to Operating Systems', 
               'Introduction to Theory and Methods of Mathematical Statistics', 'Machine Organization and Programming'],
      logo: uw_logo
    },
    {
      name: 'George School, PA',
      color: 'green.100',
      desc: 'Diploma with Honor Roll and Head of School’s List (Postgrad)',
      year: '2018 - 2019',
      courses: ['Independent Study in Advanced Programming'],
      logo: gs_logo
    },
    {
      name: 'Suankularb Wittayalai School, Bangkok, Thailand',
      color: 'pink.100',
      desc: 'Science-Mathematics Program',
      year: '2012 - 2018',
      logo: sk_logo
    },
    {
    name: 'Self-Study',
      color: 'blue.100',
      desc: 'The courses below are completed without guidance from formal institutions',
      year: '',
      courses: ['Deep Learning Specialization, by deeplearning.ai via Coursera, 2020', 'Full-Stack Web Development, via Udemy, 2020', 'Machine Learning, by Stanford University Online via Coursera, 2018'],
      logo: 'n/a'
    }
  ]

  const [show, setShow] = React.useState(Array(schools.length).fill(false));        // collapsible course list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return (
    <BackgroundContainer bg={scene} backgroundPosition='center' {...props}>
    <ShowBlock bg='bgCover4'>
      <Title mb='36px'>Education</Title>
      {
        schools.map((school, idx) => {
          const {name, color, desc, year, courses, logo} = school
          return (<Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px' pt='1.5rem' px='20px' w='100%' maxW='1200px'>
            <Flex>
              {
                logo === 'n/a'?
                (<Box h='100px' w='100px' pr='10px'></Box>):
                (<PseudoBox transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.05)'}}><Image src={logo} alt='logo' size='100px' objectFit='contain' pr='10px'/></PseudoBox>)
              }
              <Flex direction='column'>
                <TextBig color={color} fontWeight='bold'>
                  {name}
                </TextBig>
                <TextBig>
                  {desc}
                </TextBig>
                {
                  courses !== undefined && courses !== null?
                  (<Box><Button
                    variant='ghost' color='white'
                    _hover={{bg: '#FFFFFF10'}} rounded='3px'
                    _active={{ transform: 'scale(0.9)'}}
                    _focus={{ boxShadow: '0 0 0 0'}}
                    rightIcon="chevron-down"
                    w='fit-content'
                    pl='0'
                    pr='2'
                    onClick={() => handleToggle(idx)}
                    fontWeight='normal' letterSpacing='wide'
                  >
                    Highlighted Courses
                  </Button>
                  <Collapse mt={1} isOpen={show[idx]}>
                    {courses.map(course => (
                      <TextMedium><li>{course}</li></TextMedium>
                    ))}
                  </Collapse></Box>):
                  (<Box h='0' w='0'></Box>)
                }
                
              </Flex>
            </Flex>
            <TextBig pl='20px' textAlign='right'>
              {year}
            </TextBig>
          </Grid>)
        })
      }
    </ShowBlock></BackgroundContainer>
  )
}

export default Education;