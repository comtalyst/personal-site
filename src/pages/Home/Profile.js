import React from 'react';
import {Text, Box, Flex, Image, Grid } from "@chakra-ui/core";
import portrait from './media/portrait.png';

import { Title, TextMedium } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';
import BackgroundContainer from '../../containers/BackgroundContainer';
import scene from '../../media/scene4.jpg';

// might componentize this image-paragraphs template soon
function Profile(props) {
  return (
    <BackgroundContainer bg={scene} {...props}>
    <ShowBlock bg='bgCover2'>
      <Title>Hello There!</Title>
      <Grid templateColumns={{ base: "1fr", md: "minmax(0px, 150px) minmax(300px, auto) minmax(300px, auto) minmax(0px, 150px)"}} columnGap='3.5rem'>
        <Box></Box>
        <Flex justifyContent='center'pt='1.5rem' mx='20px'>
          <Image src={portrait} alt='Portrait' width='500px' height='667px' objectFit='cover' borderRadius='5px' boxShadow='2xl'/>
        </Flex>
        <Flex justifyContent='center' marginTop='-0.5rem' pt='1.5rem' mx='20px'>
          <Flex maxW='500px' wrap='wrap' direction='column'>
            <TextMedium>
              My name is Rawin Deeboonchai, nicknamed Pun.
              But I usually let people call me <span style={{color: '#63B3ED', fontWeight:'bold'}}>Robin</span> for the sake of simplicity.<br/>
            </TextMedium>
            <TextMedium mt='1rem'>
              <span style={{color: '#63B3ED', fontWeight:'bold'}}>comtalyst</span> is my digital codename, originate from the word "computing" and "catalyst." It does not make much sense, but it is sounds really cool for me.
            </TextMedium>
            <TextMedium mt='1rem'>
              Bangkok, 🇹🇭 Thailand is my hometown. 
              However, I am currently pursuing my undergraduate degree in the 🇺🇸 United States
              at the University of Wisconsin-Madison and will graduate in May 2023.
            </TextMedium>
            <TextMedium mt='1rem'>
              My brightest passion and dreams are always around computing and digital technologies since I was very young.
              This prompts me to begin my journey of pursuing a career in Computer Science when I was in high school.
              Since then, I keep seeking more knowledge about the things that lie ahead without having to wait for the predefined curriculum 
              defined by the formal education system. Throughout my journey, I discover many new things outside of the classroom
              apart from technical knowledge that might be helpful for my careers such as soft skills, connections, leadership opportunities, 
              or even life lessons and philosophy.
            </TextMedium>
            <TextMedium mt='1rem'>
              But, if I were to talk more on the technical side, I believe the topics that catch my attention the most in meantime is Backend Development.
              In the past, during high school years, my major focus was Data Structures and Algorithms, 
              which is my main weapon for programming competitions at advanced levels.
              I then decided to explore more on the applications of computer science such as Full-Stack Development and Machine Learning.
              Despite this, I am still confident in my algorithmic skills, as I still practice programming problems and participate
              in several competitions. Anyway, tangible traces of my exploration in these topics are visible through my projects and 
              participations that will be listed below on this website. Feel free to explore!
            </TextMedium>
            <TextMedium mt='1rem'>
              The end of my journey is still far from reach, but maybe the fun part is what I experience during the journey itself, right?
            </TextMedium>
          </Flex>
        </Flex>
        <Box></Box>
      </Grid>
    </ShowBlock></BackgroundContainer>
  )
}

export default Profile;