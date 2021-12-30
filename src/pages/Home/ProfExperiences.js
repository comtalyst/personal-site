import React from 'react';

import {Flex, Box} from "@chakra-ui/core";
import agoda_logo from './media/agoda_logo.png';
import { BulletPoint } from '../../containers/BlogPage.js';
import { Title } from '../../components/Texts.js';
import ShowList from '../../containers/ShowList.js';
import ShowBlock from '../../containers/ShowBlock.js';
import BackgroundContainer from '../../containers/BackgroundContainer';
import scene from '../../media/scene6.png';

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
      name: (<JobText title='Software Engineer Intern' company='Agoda'></JobText>),
      desc: (<Box>
            <BulletPoint>Focused on CI/CD back-end software development of a large-scale system of Agoda’s hotel allotment supply system</BulletPoint>
            <BulletPoint>Developed a data purging tool using Ajax for the interface, Kafka for producing and consuming requests, SQL for modifying the database, Cucumber for integration testing, and Scala for logics and unit tests on both ends</BulletPoint>
            <BulletPoint>Developed a system feature to track each distributed request in the scaled messaging pipeline to the original request from the RESTful API with a UUID mainly using Scala</BulletPoint>
            <BulletPoint>Deployed and monitored the products using TeamCity, Docker, Grafana, and Agoda-original DevOps tools</BulletPoint>
            <BulletPoint>Worked with and went through code reviews with senior software engineers in GitHub for each project</BulletPoint>
            <BulletPoint>Participated in the pitch competition for interns to develop a potential startup idea about sustainable tourism</BulletPoint>
            </Box>),
      year: 'May 2021 - Jul 2021',
      keywords: ['Software Engineering', 'Back-End Development', 'Scalable Systems', 'CI/CD', 'Play Framework', 'Scala', 'Kafka', 'SQL', 'Mockito', 'Cucumber', 'Ajax', 'HTML', 'TeamCity', 'Docker', 'Grafana', 'Git'],
      link: 'https://www.agoda.com/',
    }
  ]

  return (
    <BackgroundContainer {...props} bg={scene} bgSize={"cover"} backgroundPosition={"center"}>
    <ShowBlock bg='bgCover3'>
      <Title>Professional Experiences</Title>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </ShowBlock>
    </BackgroundContainer>
  )
}

export default ProfExperiences;