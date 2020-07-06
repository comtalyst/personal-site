import React from 'react';
import { Button, Text, Box, Flex, Image, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";

import Title from '../components/Title.js';
import ShowList from '../components/ShowList.js';

function Experiences() {
  const experiences=[
    {
      name: 'CEO, Facebad',
      desc: 'I\'m rich now lmao',
      year: 'Jan 3000 - Dec 3010',
      keywords: ['Management'],
      link: 'https://comtalyst.com/',
    },
  ]

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column'>
      <Title text='Experiences'/>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </Flex>
  )
}

export default Experiences;