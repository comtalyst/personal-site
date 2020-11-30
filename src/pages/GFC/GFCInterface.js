import React, {Component} from 'react';
import {Text, Box, Flex, Input, Image, Button} from "@chakra-ui/core";
import 'react-image-crop/dist/ReactCrop.css';

import ImageSelector from '../../components/ImageSelector.js';
import { Title, TextBig, HeaderBig, TextMedium} from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';

class GFCInterface extends Component {
  state = {
    noImagesError: false,
    croppedURL1: null,
    croppedURL2: null
  }

  constructor(){
    super()
    //this.setCropped1 = this.setCropped1.bind(this)
    //this.setCropped2 = this.setCropped2.bind(this)
  }

  submitImages() {
    if(this.state.croppedURL1 == null || this.state.croppedURL2 == null){
      this.setState({noImagesError: true})
      return
    }
    this.setState({noImagesError: false})
  }

  setCropped1(croppedURL){
    console.log(croppedURL)
    this.setState({croppedURL1: croppedURL})
  }
  setCropped2(croppedURL){
    this.setState({croppedURL2: croppedURL})
  }

  render(){
    let props = this.props
    return (
      <ShowBlock {...props} bg='trans.gray'>
        <Title>Try it out!</Title>
        <Flex direction='row' px='20px' maxW='1200px'>
          <ImageSelector id='1' setCropped={(croppedURL) => this.setCropped1(croppedURL)}/>
          <ImageSelector id='2' setCropped={(croppedURL) => this.setCropped2(croppedURL)}/>
        </Flex>
        {this.state.noImagesError?(
          <TextMedium color='#FF2222'>Please select both images</TextMedium>
        ):<Box/>}
        <Button
          bg = 'gray.600' color='white'
          _hover={{bg: 'gray.500'}} rounded='1px' h='100%'
          onClick={() => this.submitImages()}
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