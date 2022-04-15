import React from 'react';
import {Text, Box, Flex, PseudoBox} from "@chakra-ui/core";

import { Title, TextBig, HeaderBig } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';
import BackgroundContainer from '../../containers/BackgroundContainer';
import scene from '../../media/scene5.png';

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
            const color = levelToColor(skill.level)
            const bgColor = color
            const bgColorLight = color
            return (<PseudoBox borderWidth='1px' px='10px' py='0px' borderRadius='10px' m='2px' borderColor={bgColor} minWidth='fit-content' bg={bgColor}
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.1)', mx:'8px', bg:bgColorLight, boxShadow:'2xl'}}>
              <TextBig my='5px'>
                {skill.name}
              </TextBig>
            </PseudoBox>)
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
      name: 'Python',
      level: 4
    },
    {
      name: 'C#',
      level: 4
    },
    {
      name: 'Java',
      level: 4
    },
    {
      name: 'JavaScript',
      level: 4
    },
    {
      name: 'HTML',
      level: 4
    },
    {
      name: 'SQL',
      level: 3
    },
    {
      name: 'Scala',
      level: 3
    },
    {
      name: 'C',
      level: 3
    },
    {
      name: 'C++',
      level: 2
    },
    {
      name: 'CSS',
      level: 2
    },
    {
      name: 'R',
      level: 1
    },
  ]
  const frameworks = [
    {
      name: 'ASP.NET Core',
      level: 3
    },
    {
      name: 'Node.js + Express.js',
      level: 3
    },
    {
      name: 'Flask',
      level: 3
    },
    {
      name: 'React',
      level: 3
    }, 
    {
      name: 'TensorFlow',
      level: 3
    },
    {
      name: 'Tailwind',
      level: 2
    }, 
    {
      name: 'Redux',
      level: 2
    },
    {
      name: 'PyTorch',
      level: 2
    },
    {
      name: 'Jest',
      level: 2
    },
    {
      name: 'Scikit-learn',
      level: 2
    },
    {
      name: 'Play Framework',
      level: 2
    },
    {
      name: 'Pandas',
      level: 2
    },
    {
      name: 'Cucumber',
      level: 1
    },
  ]
  const platforms = [
    {
      name: 'Git',
      level: 4
    },
    {
      name: 'Unix',
      level: 4
    },
    {
      name: 'Microsoft Azure',
      level: 3
    },
    {
      name: 'Arduino',
      level: 3
    },
    {
      name: 'Unity 2D',
      level: 3
    },
    {
      name: 'PostgreSQL',
      level: 2
    },
    {
      name: 'MongoDB',
      level: 2
    },
    {
      name: 'Kafka',
      level: 2
    },
    {
      name: 'Docker',
      level: 2
    },
    {
      name: 'Google Cloud Platform',
      level: 2
    },
    {
      name: 'Android Studio',
      level: 2
    },
    {
      name: 'TeamCity',
      level: 1
    },
    {
      name: 'Redis',
      level: 1
    },
    {
      name: 'Grafana',
      level: 1
    },
  ]
  const specialties = [
    {
      name: 'Data Structure & Algorithms',
      level: 4
    },
    {
      name: 'Competitive Programming',
      level: 4
    },
    {
      name: 'Backend Development',
      level: 3
    },
    {
      name: 'Machine Learning',
      level: 3
    },
    {
      name: 'Frontend Development',
      level: 2
    },
    {
      name: 'CI/CD',
      level: 2
    },
    {
      name: 'Game Development',
      level: 1
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
    <BackgroundContainer {...props} bg={scene} bgSize={"cover"} backgroundPosition={"center"}>
    <ShowBlock bg='bgCover4'>
      <Title>Tech Skills</Title>
      <Flex direction='column' px='20px' maxW='1200px'>
        <SkillTitle>Languages</SkillTitle>
        <SkillContainer skills={languages}/>
        <SkillTitle>Frameworks/Libraries</SkillTitle>
        <SkillContainer skills={frameworks}/>
        <SkillTitle>Platforms</SkillTitle>
        <SkillContainer skills={platforms}/>
      </Flex>
    </ShowBlock>
    </BackgroundContainer>
  )
}

export default Skills;