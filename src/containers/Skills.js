import React from 'react';
import {Text, Box, Flex} from "@chakra-ui/core";

import Title from '../components/Title.js';

function Skills() {

  // customize frame color here
  const levelToColor = (level) => {
    let color = ''
    switch(level){
      case 1:
        color = 'blue.700'
        break
      case 2:
        color = 'blue.600'
        break
      case 3:
        color = 'blue.500'
        break
      case 4:
        color = 'blue.400'
        break
      case 5:
        color = 'blue.300'
        break
      default:
        color = 'gray.500'
    }
    return color
  }

  // customize boxes here (will be called in getSkillContainer() to prevent code duplication from multiple skill types)
  const getBoxes = (skills) => {
    return skills.map(skill => {
      let color = levelToColor(skill.level)
      let bgColor = color
      return (<Box borderWidth='2px' px='5px' py='1px' borderRadius='5px' m='2px' borderColor={color} minWidth='fit-content' bg={bgColor}>
        <Text fontSize='xl' lineHeight='taller' letterSpacing='wider' fontWeight='light'>
          {skill.name}
        </Text>
      </Box>)
    })
  }

  // customize row of boxes here
  const getSkillContainer = (skills) => {
    return(
      <Flex pt='0.5rem' justifyContent='center' flexWrap='wrap'>
        {
          getBoxes(skills)
        }
      </Flex>
    )
  }
  // customize skill title text here
  const getSkillTitle = (skillName) => {
    return(
      <Text fontSize='3xl' letterSpacing='wider' fontWeight='light' textAlign='center' pt='1rem'>
        {skillName}
      </Text>
    )
  }

  // your skills here
  const languages = [
    {
      name: 'C/C++',
      level: 4
    },
    {
      name: 'Java',
      level: 4
    },
    {
      name: 'Python',
      level: 4
    },
    {
      name: 'JavaScript',
      level: 3
    },
    {
      name: 'SQL',
      level: 2
    },
    {
      name: 'C#',
      level: 2
    },
    {
      name: 'HTML5 & CSS3',
      level: 2
    },
  ]
  const frameworks = [
    {
      name: 'tf.keras',
      level: 3
    },
    {
      name: 'Pandas',
      level: 3
    },
    {
      name: 'React',
      level: 3
    },
    {
      name: 'React-Redux',
      level: 3
    },
    {
      name: 'Express.js & Node.js',
      level: 2
    },
    {
      name: 'Tensorflow',
      level: 2
    },
    {
      name: 'Unity 2D',
      level: 2
    },
  ]
  const platforms = [
    {
      name: 'Arduino',
      level: 4
    },
    {
      name: 'GitHub',
      level: 3
    },
    {
      name: 'Linux',
      level: 3
    },
    {
      name: 'Android Studio',
      level: 2
    },
    {
      name: 'PostgreSQL',
      level: 2
    },
  ]
  const specialties = [
    {
      name: 'Data Structure & Algorithms',
      level: 4
    },
    {
      name: 'Deep & Machine Learning',
      level: 3
    },
    {
      name: 'Object-Oriented Programming',
      level: 3
    },
    {
      name: 'Web Development',
      level: 3
    },
    {
      name: 'Game Development',
      level: 2
    },
  ]

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column'>
      <Title text='Tech Skills'/>
      <Flex direction='column' px='20px'>
        {getSkillTitle('Languages')}
        {getSkillContainer(languages)}
        {getSkillTitle('Frameworks/Libraries')}
        {getSkillContainer(frameworks)}
        {getSkillTitle('Platforms')}
        {getSkillContainer(platforms)}
        {getSkillTitle('Specialties')}
        {getSkillContainer(specialties)}
      </Flex>
    </Flex>
  )
}

export default Skills;