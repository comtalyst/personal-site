import React, {Component} from 'react';
import {Text, Box, Flex, Input, Image, Button} from "@chakra-ui/core";
import 'react-image-crop/dist/ReactCrop.css';

import ImageSelector from '../../components/ImageSelector.js';
import { Title, TextBig, HeaderBig, TextMedium} from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';

function submitImages(selector1, selector2) {

}

class GFCInterface extends Component {
  render(){
    let props = this.props
    let selector1 = (<ImageSelector id='0' />)
    let selector2 = (<ImageSelector id='1' />)
    return (
      <ShowBlock {...props} bg='trans.gray'>
        <Title>Try it out!</Title>
        <Flex direction='row' px='20px' maxW='1200px'>
          {selector1}
          {selector2}
          
        </Flex>
        <Button
          bg = 'gray.600' color='white'
          _hover={{bg: 'gray.500'}} rounded='1px' h='100%'
          onClick={submitImages(selector1, selector2)}
          px='20px' py='5px'
        >
          <TextMedium>
            Submit
          </TextMedium>
        </Button>
      </ShowBlock>
    )
  }

  
}

export default GFCInterface;