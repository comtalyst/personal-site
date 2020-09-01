import React from 'react';
import { Flex } from "@chakra-ui/core";

function ShowBlock(props) {

  return (
    <Flex w='100%' pb='3rem' pt='1rem' direction='column' alignItems='center' {...props}>
      {props.children}
    </Flex>
  )
}

export default ShowBlock;