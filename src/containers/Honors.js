import React from 'react';
import {Flex, Image} from "@chakra-ui/core";

import toi1 from '../media/toi1.png';
import apio_logo from '../media/apio_logo.png';
import icpc_logo from '../media/icpc_logo.png';
import trinity_logo from '../media/trinity_logo.png';
import nsc_logo from '../media/nsc_logo.png';

import Title from '../components/Title.js';
import ShowList from '../components/ShowList.js';

function Honors() {
  const gold = 'yellow.400'
  const silver = 'gray.300'
  const bronze = 'orange.200'

  const honors=[
    {
      name: '6th Place, ICPC 2019 North Central North America Regional Contest',
      color: silver,
      desc: 'A formal college-level programming competition to qualify regional representatives to the ICPC World Finals 2020. ' +
      'Contestants from 178 teams have to solve most number of problems using data structure and algorithms, varied from basics to advanced, ' +
      'in a limited time (this competition style is called "Competitive Programming")',
      year: (<Flex justifyContent='flex-end' mt='1rem' wrap='wrap'>
              <Image src={icpc_logo} alt='screenshot' h='80px' m='10px'/>
              Nov 2019
            </Flex>),
      keywords: ['Teamed Competitive Programming', 'C/C++', 'Data Structure and Algorithms'],
      link: 'https://icpc.global/',
    },
    {
      name: 'North American Award (Level 3), Trinity College Int’l Firefighting Robot Contest 2019',
      color: gold,
      desc: 'A firefighting robotics competition: the robot must traverse the maze and extinguish the candle in a limited time. ' +
      'Competed using the robot Firex along with teammates from George School: Sam, Andrew, and Ian under the guidance of robotics teacher Chris. ' + 
      'Received the best performance award for teams from North America in the most advanced maze.',
      year: (<Flex justifyContent='flex-end' mt='1rem' wrap='wrap'>
              <Image src={trinity_logo} alt='screenshot' h='100px' m='10px' mx='25px'/>
              Apr 2019
            </Flex>),
      keywords: ['Robotics & Physical Computing', 'Arduino', 'C'],
      link: 'https://trinityrobotcontest.org/',
    },
    {
      name: 'Royal Thai Olympiad Scholarship',
      desc: 'A scholarship from the Thai government to study computer sciences internationally up to Doctoral Degree ' +
      'Awarded to students who reached the final qualification round in an academic Olympiad program (in my case, informatics Olympiad).',
      year: 'Jun 2018',
    },
    {
      name: 'National Representative, Asia-Pacific Informatics Olympiad (APIO) 2018',
      desc: 'A formal high-school-level programming competition for national representatives from Asian-Pacific nations. ' + 
      'Missed a medalist opportunity with a mistake I never forget...',
      year: (<Flex justifyContent='flex-end' mt='1rem' wrap='wrap'>
              <Image src={apio_logo} alt='screenshot' h='80px' m='10px'/>
              May 2018
            </Flex>),
      keywords: ['Competitive Programming', 'C/C++', 'Data Structure and Algorithms'],
      link: 'https://apio2018.ru/',
    },
    {
      name: 'Participant, Thailand\'s National Software Contest 2018',
      desc: 'A nation-wide software development competition. Competed using the Chatbot Amico along with teammates from ' +
      'Suankularb Wittayalai School: Pete and Boss under the guidance of teacher Saowalak. ' + 
      'Qualified to the first round and received development funds.',
      year: (<Flex justifyContent='flex-end' mt='1rem' wrap='wrap'>
              <Image src={nsc_logo} alt='screenshot' h='80px' m='10px' mx='30px'/>
              Mar 2018
            </Flex>),
      keywords: ['Software Development', 'Chatbot', 'Machine Learning (Lite)', 'Python'],
      link: 'http://www.nectec.or.th/nsc/',
    },
    {
      name: 'Silver Medalist, 12th Thailand Olympiad in Informatics',
      color: silver,
      desc: 'A formal high-school-level nation-wide programming competition organized by ' + 
      'the Institute for the Promotion of Teaching Science and Technology, a government-sponsored organization.',
      year: 'Jun 2016',
      keywords: ['Competitive Programming', 'C/C++', 'Data Structure and Algorithms'],
      link: 'http://www.enews.psu.ac.th/index.php/education/28-the-12th-thailand-olympiad-in-informatics',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={toi1} alt='screenshot' h='250px' m='10px' borderRadius='5px'  shadow='4px 4px #00000020'/>
              </Flex>)
    },
  ]

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' bg='trans.gray'>
      <Title text='Awards and Honors'/>
      <ShowList rows={honors} collapseTitle='Aspects'/>
    </Flex>
  )
}

export default Honors;