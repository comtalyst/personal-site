import React from 'react';
import {Text} from "@chakra-ui/core";

function Title(props) {
  const {text} = props
  return (
    <Text w='100%' textAlign='center' fontSize='5xl' letterSpacing='wider' fontWeight='light'>
      {text}
    </Text>
  )
}

export default Title;