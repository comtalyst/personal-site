import React from 'react';
import {Text} from "@chakra-ui/core";

export function Title(props) {
  return (
    <Text w='100%' textAlign='center' fontSize='5xl' letterSpacing='wider' fontWeight='light' 
          {...props}>
      {props.children}
    </Text>
  )
}

export function TextMedium(props) {
  return (
    <Text fontSize='l' lineHeight='taller' letterSpacing='wider' fontWeight='light' flexWrap='wrap'
          {...props}>
      {props.children}
    </Text>
  )
}

export function TextBig(props) {
  return (
    <Text fontSize='xl' lineHeight='tall' letterSpacing='wider' fontWeight='light' flexWrap='wrap'
          {...props}>
      {props.children}
    </Text>
  )
}

export function HeaderBig(props) {
  return (
    <Text fontSize='3xl' letterSpacing='wider' fontWeight='light' flexWrap='wrap'
          {...props}>
      {props.children}
    </Text>
  )
}