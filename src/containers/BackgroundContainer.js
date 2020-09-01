import React from 'react';
import { Flex } from "@chakra-ui/core";

function BackgroundContainer(props) {
  return (
    <Flex w='100%' bgImage={"url(" + props.bg + ")"} bgRepeat="no-repeat" bgSize='cover' {...props}>
      {props.children}
    </Flex>
  )
}

export default BackgroundContainer;