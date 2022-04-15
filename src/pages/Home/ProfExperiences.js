import React from 'react';

import {Flex, Box, Text} from "@chakra-ui/core";
import agoda_logo from './media/agoda_logo.png';
import microsoft_logo from './media/microsoft_logo.png';
import { BulletPoint } from '../../containers/BlogPage.js';
import { Title, TextSmall } from '../../components/Texts.js';
import ShowList from '../../containers/ShowList.js';
import ShowBlock from '../../containers/ShowBlock.js';
import BackgroundContainer from '../../containers/BackgroundContainer';
import scene from '../../media/scene6.jpg';

function ProfExperiences(props) {
  const JobText = (props) => {
    return (<Flex direction={'column'}>
      <Text fontWeight='bold'>{props.title}</Text>
      <Flex>
        <TextSmall fontWeight='semibold'>{props.company}</TextSmall>
        <TextSmall>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        </TextSmall>
        <TextSmall>{props.location}</TextSmall>
      </Flex>
    </Flex>)
  }

  // these data may need to stay here instead of JSON since we are making use of component tags directly
  const experiences=[
    {
      logo: microsoft_logo,
      name: (<JobText title='Software Engineering Intern' company='Microsoft' location='Redmond, WA, USA'></JobText>),
      desc: (<Box>
            Coming soon!
            </Box>),
      year: 'May 2022 - Aug 2022',
      link: 'https://www.microsoft.com/',
    },
    {
      logo: agoda_logo,
      name: (<JobText title='Software Engineering Intern' company='Agoda' location='Bangkok, Thailand'></JobText>),
      desc: (<Box>
            <BulletPoint>Focused on CI/CD backend software development of a large-scale system of hotel allotment supply system</BulletPoint>
            <BulletPoint>Developed a data purging tool using Ajax for the interface, Kafka for producing and consuming requests, SQL for data access, Cucumber for integration testing, and Scala for logics and unit tests on both ends</BulletPoint>
            <BulletPoint>Developed a system feature to track each distributed request in the scaled messaging pipeline to the original request from the RESTful API with a UUID mainly using Scala</BulletPoint>
            <BulletPoint>Deployed and monitored the products using TeamCity, Docker, Grafana, and Agoda-original DevOps tools</BulletPoint>
            <BulletPoint>Worked with and went through code reviews with senior software engineers in GitHub for each project</BulletPoint>
            <BulletPoint>Participated in the pitch competition for interns to develop a potential startup idea about sustainable tourism</BulletPoint>
            </Box>),
      year: 'May 2021 - Jul 2021',
      keywords: ['Backend', 'Distributed Systems', 'Scalability', 'CI/CD', 'Play Framework', 'Scala', 'Kafka', 'SQL', 'Mockito', 'Cucumber', 'Ajax', 'HTML', 'TeamCity', 'Docker', 'Grafana', 'Git'],
      link: 'https://www.agoda.com/',
    }
  ]

  return (
    <BackgroundContainer {...props} bg={scene} bgSize={"cover"} backgroundPosition={"center"}>
    <ShowBlock bg='bgCover2'>
      <Title>Professional Experiences</Title>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </ShowBlock>
    </BackgroundContainer>
  )
}

export default ProfExperiences;