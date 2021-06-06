import React from 'react';

import { Title } from '../../components/Texts.js';
import uw_logo from './media/uw_logo.png';
import { BulletPoint } from '../../containers/BlogPage.js';
import { Flex, Box } from "@chakra-ui/core";
import ShowList from '../../containers/ShowList.js';
import ShowBlock from '../../containers/ShowBlock.js';

function ResearchExperiences(props) {
  // these data may need to stay here instead of JSON since we are making use of component tags directly
  const experiences=[
    {
      logo: uw_logo,
      name: 'Defect Detection using State-of-the-art models with Synthetic Images',
      desc: (<Box>
            <BulletPoint>Worked on the formal research with Ryan Jacobs, Ph.D., and Prof. Dane Morgan at UW-Madison</BulletPoint>
            <BulletPoint>The objective is to train object detection models to classify material defects using a dataset of synthetically generated images of the material defections</BulletPoint>
            <BulletPoint>This dataset will be generated using Generative Adversarial Networks</BulletPoint>
            <br/>
            <BulletPoint>Pre-processed and transformed the training dataset to be trained by GAN</BulletPoint>
            <BulletPoint>Trained and tuned the model of a certain GAN architecture using PyTorch to create the synthetic dataset</BulletPoint>
            </Box>),
      year: 'Jan 2021 - May 2021',
      keywords: ['Research', 'Machine Learning', 'Conputer Vision', 'Generative Adversarial Networks', 'PyTorch', 'Python', 'Material Sciences'],
      link: 'https://skunkworks.engr.wisc.edu/projects/'
    }
  ]

  return (
    <ShowBlock {...props}>
      <Title>Research Experiences</Title>
      <ShowList rows={experiences} collapseTitle='Experiences'/>
    </ShowBlock>
  )
}

export default ResearchExperiences;