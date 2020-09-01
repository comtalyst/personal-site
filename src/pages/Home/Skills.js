import React from 'react';
import {Text, Box, Flex} from "@chakra-ui/core";

import { Title, TextBig, HeaderBig } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';

function Skills(props) {

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

  // customize row boxes here
  const SkillContainer = (props) => {
    return(
      <Flex pt='0.5rem' justifyContent='center' flexWrap='wrap'>
        {
          props.skills.map(skill => {
            let color = levelToColor(skill.level)
            let bgColor = color
            return (<Box borderWidth='2px' px='5px' py='1px' borderRadius='5px' m='2px' borderColor={color} minWidth='fit-content' bg={bgColor}>
              <TextBig my='5px'>
                {skill.name}
              </TextBig>
            </Box>)
          })
        }
      </Flex>
    )
  }
  // customize skill title text here
  const SkillTitle = (props) => {
    return(
      <HeaderBig textAlign='center' pt='1rem' {...props}>
        {props.children}
      </HeaderBig>
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
      name: 'Keras',
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
  const business = [
    {
      name: 'Team Leadership',
      level: 2
    },
    {
      name: 'Market Research',
      level: 1
    },
  ]

  return (
    <ShowBlock {...props}>
      <Title>Tech Skills</Title>
      <Flex direction='column' px='20px'>
        <SkillTitle>Languages</SkillTitle>
        <SkillContainer skills={languages}/>
        <SkillTitle>Frameworks/Libraries</SkillTitle>
        <SkillContainer skills={frameworks}/>
        <SkillTitle>Platforms</SkillTitle>
        <SkillContainer skills={platforms}/>
        <SkillTitle>Specialties</SkillTitle>
        <SkillContainer skills={specialties}/>
        <SkillTitle>Business</SkillTitle>
        <SkillContainer skills={business}/>
      </Flex>
    </ShowBlock>
  )
}

export default Skills;