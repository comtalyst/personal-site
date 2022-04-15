import React from 'react';

import { Title } from '../../components/Texts.js';
import ShowList from '../../containers/ShowList.js';
import ShowBlock from '../../containers/ShowBlock.js';
import BackgroundContainer from '../../containers/BackgroundContainer';
import scene from '../../media/scene9.jpg';

function Experiences(props) {
  // these data may need to stay here instead of JSON since we are making use of component tags directly
  const experiences=[
    {
      name: 'Participant / Startup Co-Founder Trainee, AIS Young Digital Talent Camp 2020',
      desc: 'Participated in the practical startup building program and competition organized by AIS (Thailand) and Stanford University. ' +
            'Formed and conducted market research on several tech startup ideas along with 3 other team members. ' +
            'The qualified finalists will have a chance to deliver a pitch of their final product to several venture capitalists and the AIS Corporation executives.',
      year: 'Jul 2020 - Sep 2020',
      keywords: ['Team Leadership', 'Businesses and Startups', 'Design Thinking', 'Market Research'],
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
      name: 'Finalist, Thailand national team of the International Olympiad in Informatics (IOI)',
      desc: 'Competed in a series of training camps and programming contests to select 4 national representatives to the IOI. ' + 
      'Ranked 5th place in the final stage (That\'s right, I was literally almost there).',
      year: 'Jun 2015 - May 2018',
      keywords: ['Competitive Programming', 'C/C++', 'Data Structures & Algorithms', 'Computer Science Theory'],
      link: 'n/a',
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
    <BackgroundContainer {...props} bg={scene} bgSize={"cover"} backgroundPosition={"center"}>
    <ShowBlock bg='bgCover4'>
      <Title>Extracurricular Experiences</Title>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </ShowBlock>
    </BackgroundContainer>
  )
}

export default Experiences;