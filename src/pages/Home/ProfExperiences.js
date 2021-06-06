import React from 'react';

import {Flex} from "@chakra-ui/core";
import agoda_logo from './media/agoda_logo.png';
import { Title } from '../../components/Texts.js';
import ShowList from '../../containers/ShowList.js';
import ShowBlock from '../../containers/ShowBlock.js';

function ProfExperiences(props) {
  const JobText = (props) => {
    return (<Flex>
      {props.title}&nbsp;&nbsp;|&nbsp;&nbsp;{props.company}
    </Flex>)
  }

  // these data may need to stay here instead of JSON since we are making use of component tags directly
  const experiences=[
    {
      logo: agoda_logo,
      name: (<JobText title='Software Engineer Internship' company='Agoda'></JobText>),
      desc: 'Will be focusing on large scale Back-End development using Scala programming language and various other tools.',
      year: 'May 2021 ---',
      keywords: ['Software Engineering', 'Back-End Development', 'Large scalable systems', 'Scala'],
      link: 'https://www.agoda.com/',
    }
  ]

  return (
    <ShowBlock {...props}>
      <Title>Professional Experiences</Title>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </ShowBlock>
  )
}

export default ProfExperiences;