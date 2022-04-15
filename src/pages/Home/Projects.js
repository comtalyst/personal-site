import React from 'react';
import {Flex, Image} from "@chakra-ui/core";

import shootdown1 from './media/shootdown1.png';
import shootdown2 from './media/shootdown2.png';
import shootdown3 from './media/shootdown3.png';
import shootdown4 from './media/shootdown4.png';
import shootdown5 from './media/shootdown5.png';
import luminateer1 from './media/luminateer1.png';
import luminateer2 from './media/luminateer2.png';
import timelette1 from './media/timelette1.png';
import wiscoursealert1 from './media/wiscoursealert1.png';
import wiscoursealert2 from './media/wiscoursealert2.png';
import firex1 from './media/firex1.png';
import firex2 from './media/firex2.png';
import minesweepers1 from './media/minesweepers1.PNG';

import { Title } from '../../components/Texts.js';
import ShowList from '../../containers/ShowList.js';
import ShowBlock from '../../containers/ShowBlock';

import BackgroundContainer from '../../containers/BackgroundContainer';
import scene from '../../media/scene8.jpeg';

function Projects(props) {

  // these data may need to stay here instead of JSON since we are making use of component tags directly
  const projects=[
    {
      name: 'Personal Portfolio Website',
      desc: 'The website you are currently viewing!',
      year: 'Since Jul 2020',
      keywords: ['Frontend', 'React', 'JavaScript', 'HTML', 'CSS', 'Chakra UI'],
      link: 'https://comtalyst.com',
      source: 'https://github.com/comtalyst/personal-site',
    },
    {
      name: 'Timelette',
      desc: 'A web application that creates time capsules in form of emails that are scheduled to be sent in the future. ' + 
            'Designed the backend system to be scalable mainly using Microsoft Azure PaaS.',
      year: 'Jan 2022 - Apr 2022',
      keywords: ['Backend', 'Frontend', 'Distributed Systems', 'Scalability', 'ASP.NET Core', 'EntityFrameworkCore', 'React', 'Tailwind', 'PostgreSQL', 
                'Microsoft Azure', 'Azure App Service', 'Azure Blob Storage', 'Azure Key Vault', 'Azure Service Bus', 'Azure Static Web Apps', 
                '.NET', 'C#', 'JavaScript'],
      link: 'https://www.timelette.app/',
      source: 'https://github.com/comtalyst/chronoria',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={timelette1} alt='screenshot' h='300px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
              </Flex>)
    },
    {
      name: 'Wiscoursealert',
      desc: 'A web application that notifies students of the University of Wisconsin-Madison whenever a seat in the course they are looking to enroll in becomes available. ' +
            'Worked with a team of 4.',
      year: 'Apr 2021 - Apr 2022',
      keywords: ['Backend', 'Frontend', 'Node.js', 'Express.js', 'Jest', 'MongoDB', 'Redis', 'React', 'Tailwind', 'Google Cloud Platform', 'JavaScript'],
      link: 'https://wiscoursealert.com/',
      source: 'https://github.com/wiscoursealert/wiscoursealert',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={wiscoursealert1} alt='screenshot' h='300px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={wiscoursealert2} alt='screenshot' h='300px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
              </Flex>)
    },
    {
      name: 'Generative Facial Cosmetics',
      desc: 'Transfer lipstick colors from a face to another face automatically and smoothly using machine learning techniques. ' +
            'More details and live tryout are in the link provided. ',
      year: 'Jul 2020 - Dec 2020',
      keywords: ['Machine Learning', 'Computer Vision', 'Backend', 'Generative Adversarial Networks', 'API', 'Flask', 'PostgreSQL', 'TensorFlow', 'Keras', 'OpenCV', 'Dlib', 'Docker', 'Google Cloud Platform', 'Python'],
      link: '#/pages/GFC',
      source: 'https://github.com/comtalyst/generative-facial-cosmetics',
    },
    {
      name: 'Shootdown',
      desc: 'A mobile arcade/abstract shooting game. Made available on Google Play. ',
      year: 'Jun 2019 - Jan 2020',
      keywords: ['Game Development', 'Object-Oriented Programming', 'Unity 2D', 'C#', 'Google Play Services'],
      link: 'https://play.google.com/store/apps/details?id=com.comtalyst.shootdown',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={shootdown1} alt='screenshot' h='250px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={shootdown2} alt='screenshot' h='250px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={shootdown3} alt='screenshot' h='250px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={shootdown4} alt='screenshot' h='250px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={shootdown5} alt='screenshot' h='250px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
              </Flex>)
    },
    {
      name: 'Luminateer',
      desc: 'An Arduino-powered software that makes PattonRobotics OneBot follows the tricolor LED signal. A project for the Intensive Robotics course at George School.',
      year: 'Mar 2019 - May 2019',
      keywords: ['Robotics', 'Arduino', 'C'],
      source: 'https://github.com/comtalyst/Luminateer',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={luminateer1} alt='screenshot' h='200px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={luminateer2} alt='screenshot' h='200px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
              </Flex>)
    },
    {
      name: 'Random Forestry',
      desc: 'A project for the Independent Study in Advanced Programming course at George School. The technical objective of the project is to find and select "useful" features from the mass amount of predictable training data using Random Forest.',
      year: 'Mar 2019 - May 2019',
      keywords: ['Machine Learning', 'Random Forest', 'scikit-learn', 'Python'],
      source: 'https://github.com/comtalyst/Random_Forestry',
    },
    {
      name: 'Firex',
      desc: 'A firefighting robot created for Trinity College International Firefighting Robot Contest 2019 by 4 students from George School under the guidance of robotics teacher Chris: Robin (Maze traversal / pathfinding), Sam (Hardware and Fire extinguishing), Andrew (Hardware and Fire detection) and Ian (Hardware and Microphone).',
      year: 'Mar 2019 - Apr 2019',
      keywords: ['Robotics', 'Arduino', 'C'],
      source: 'https://github.com/comtalyst/Firex',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={firex1} alt='screenshot' h='200px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
                <Image src={firex2} alt='screenshot' h='200px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
              </Flex>)
    },
    {
      name: 'Minesweepers',
      desc: 'A project for the Independent Study in Advanced Programming course at George School. The technical objective of the project is to train the "Minesweeper" bots to correctly walk through the "mines" presented on a 2D plane using Genetic Algorithms and Neural Networks.',
      year: 'Nov 2018 - Mar 2019',
      keywords: ['Machine Learning', 'Neural Networks', 'Genetic Algorithms', 'Java'],
      source: 'https://github.com/comtalyst/Minesweepers',
      extras: (<Flex justifyContent='center' mt='1rem' wrap='wrap'>
                <Image src={minesweepers1} alt='screenshot' h='300px' m='10px' borderRadius='5px' shadow='4px 4px #00000020'/>
              </Flex>)
    },
    {
      name: 'Amico',
      desc: 'A Chatbot web application to support people with depression. I mainly responsible for the bot part; while my teammate, Pete, is mainly responsible for launching it as a web application. Submitted as a part of Thailand\'s National Software Contest 2018.',
      year: 'Jun 2017 - Mar 2018',
      keywords: ['Chatbot', 'Machine Learning', 'Python'],
      source: 'https://github.com/comtalyst/Amico-Bot',
    },
    {
      name: 'Auditial',
      desc: 'An accounting android application.',
      year: 'Jul 2016 - Aug 2016',
      keywords: ['Android Studio', 'Java'],
      source: 'https://github.com/comtalyst/Auditial',
    },
  ]

  return (
    <BackgroundContainer {...props} bg={scene} bgSize={"cover"} backgroundPosition={"center"}>
    <ShowBlock bg='bgCover3'>
      <Title>Projects</Title>
      <ShowList rows={projects} collapseTitle='Technologies'/>
    </ShowBlock>
    </BackgroundContainer>
  )
}

export default Projects;