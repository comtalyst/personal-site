import React, {useRef} from 'react';

import { useHistory } from "react-router-dom";

import { Box, Flex, Image } from "@chakra-ui/core";

import NavigationBar from '../containers/NavigationBar.js';
import Contact from '../pages/global/Contact.js';
import {TextMedium} from '../components/Texts.js';
import ShowBlock from '../containers/ShowBlock.js';
import grad from '../media/grad.png';

function BlogPage(props) {
  const history = useHistory()

  const ref = {
    "Contact": useRef(null)
  }

  const navClick = (compName) => {
    if(compName === 'Contact'){
      window.scrollTo(0, ref[compName].current.offsetTop - 64) 
    }
    else{
      history.push("/home");
    }
  }

  return (
    <Box bg='matte.bg'>
    <Box bg='trans.gray' color='white' bgRepeat="no-repeat" bgSize='100% 100%' {...props}>
      <NavigationBar navClick={navClick} names={['Home', 'Contact']}/>
      <ShowBlock>
        {props.children}
      </ShowBlock>
      <hr/>
      <div ref={ref['Contact']}></div>
      <Contact bg='trans.gray'/>
    </Box>
    </Box>
  );
}

export const TopBar = (props) => {
  return (<Flex justifyContent='center' alignItems='center' pt='10px' mb='-20px' {...props}>
    {props.children}
  </Flex>)
}
export const Block = (props) => {
  return (
    <Flex direction='column' mt='30px' px='20px' w='100%' maxW='1200px' {...props}>
      {props.children}
    </Flex>
  )
}
export const SubBlock = (props) => {
  return (
    <Flex direction='column' mt='20px' {...props}>
      {props.children}
    </Flex>
  )
}
export const Image_ = (props) => {
  return (
    <Image h='250px' m='10px' borderRadius='2px' shadow='4px 4px #00000020' {...props}/>
  )
}
export const Paragraph = (props) => {
  if(props.tab === true){
    return (
      <TextMedium mt='10px' lineHeight='tall' {...props}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.children}
      </TextMedium>
    )
  }
  return (
    <TextMedium mt='10px' lineHeight='tall' {...props}>
      {props.children}
    </TextMedium>
  )
}
export const BulletPoint = (props) => {
  return (
    <TextMedium mb='6px' lineHeight='tall'>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{props.children}<br/></TextMedium>
  )
}
export const Bold = (props) => {
  return (
    <span style={{fontWeight:'bold', ...props}}>{props.children}</span>
  )
}

export default BlogPage;
