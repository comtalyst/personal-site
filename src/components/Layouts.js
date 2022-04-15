import React from 'react';
import { Box, Flex, PseudoBox } from "@chakra-ui/core";
import { exist } from '../utils';
import { TextMedium } from './Texts.js'

export function Empty() {
  return (
    <Box h='0' w='0'></Box>
  )
}

export function TagBoxes(props) {
  return (
    <Flex justifyContent='left' flexWrap='wrap'
          {...props}>
      {props.keywords.map(keyword => {
        const bgColor = 'gray.600'          // default
        const bgColorLight = 'gray.500'
        if(exist(props.boxColor)){
          bgColor = props.boxColor
        }
        return (<PseudoBox borderWidth='1px' px='10px' py='0px' borderRadius='10px' m='2px' borderColor={bgColor} minWidth='fit-content' bg={bgColor} boxShadow='lg'
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.05)', mx:'4px', bg:bgColorLight, boxShadow:'2xl', borderColor:'gray.500'}}>
          <TextMedium>
            {keyword}
          </TextMedium>
        </PseudoBox>)
      })}
    </Flex>
  )
}