import React from 'react';
import { Box, Flex } from "@chakra-ui/core";
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
        let bgColor = 'gray.600'          // default
        if(exist(props.boxColor)){
          bgColor = props.boxColor
        }
        return (<Box borderWidth='2px' px='5px' py='1px' borderRadius='5px' m='2px' borderColor={bgColor} minWidth='fit-content' bg={bgColor}>
          <TextMedium>
            {keyword}
          </TextMedium>
        </Box>)
      })}
    </Flex>
  )
}