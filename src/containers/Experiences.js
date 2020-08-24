import React from 'react';
import { Flex } from "@chakra-ui/core";

import { Title } from '../components/Texts.js';
import ShowList from '../components/ShowList.js';

function Experiences(props) {
  const experiences=[
    {
      name: 'Participant, AIS Young Digital Talent Camp 2020',
      desc: 'Being trained in the practical startup training program and competition organized by AIS (Thailand) and Stanford University. ' +
            'Developed and did market research on several tech startup ideas along with 3 other team members.',
      year: 'Jul 2020 ---',
      keywords: ['Businesses and Startups', 'Design Thinking', 'Market Research', 'Leadership and Communication'],
      link: 'https://www.aydtcamp.com/',
    },
    {
      name: 'Member, UW-Madison 2019 ICPC Team',
      desc: 'Trained in preparation for ICPC 2019 North Central NA Regional Contest along with two other teammates.',
      year: 'Sep 2019 - Nov 2019',
      keywords: ['Teamed Competitive Programming', 'C/C++', 'Data Structures & Algorithms'],
      link: 'http://pages.cs.wisc.edu/~dieter/ICPC/',
    },
    {
      name: 'Finalist, Thailand International Olympiad in Informatics Team',
      desc: 'Participated in a series of training camps and programming contests to select 4 national representatives to the IOI. ' + 
      'Ranked 5th place in the final stage (That\'s right, I was literally almost there).',
      year: 'Jun 2015 - May 2018',
      keywords: ['Competitive Programming', 'C/C++', 'Data Structures & Algorithms', 'Computer Science Theory'],
      link: 'http://pages.cs.wisc.edu/~dieter/ICPC/',
    },
    {
      name: 'Executive Board, Suankularb Wittayalai School Computer Club',
      desc: 'Organized various activities like programming competitions, workshops, and exhibitions to students and visitors. ' + 
      'The notable ones are an Android Application Tutorial workshop (sponsored by Google Student Ambassador) ' + 
      'and an ICPC-style high school level competitive programming contest.',
      year: 'Dec 2015 - May 2017',
      link: 'https://www.facebook.com/skcomclub/',
    },
  ]

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' alignItems='center' {...props}>
      <Title>Experiences</Title>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </Flex>
  )
}

export default Experiences;