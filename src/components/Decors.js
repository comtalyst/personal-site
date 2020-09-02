import React from 'react';
import { Divider } from "@chakra-ui/core";

export function DividerBold(props) {
  return (
    <Divider border='2px solid' borderColor='trans.gray' my='1.5rem'
             {...props}/>
  )
}