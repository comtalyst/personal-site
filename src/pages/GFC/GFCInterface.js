import React, {Component} from 'react';
import {Text, Box, Flex, Input, Button, Image as CKImage} from "@chakra-ui/core";
import 'react-image-crop/dist/ReactCrop.css';

import ImageSelector from '../../components/ImageSelector.js';
import { Title, TextBig, HeaderBig, TextMedium} from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';



class GFCInterface extends Component {
  API_URL = "http://localhost:5000"
  state = {
    noImagesError: false,     // images not uploaded?
    croppedURL1: null,        // URL of cropped image 1
    croppedURL2: null,        // same
    resultURL: null,          // URL of mixed image
    resultError: null,        // error message from the API
    isLoading: false          // currently processing?
  }

  constructor(){
    super()
    //this.setCropped1 = this.setCropped1.bind(this)      // alternate method, if want to pass func instead of (...) => func(...)
    //this.setCropped2 = this.setCropped2.bind(this)
  }

  getBase64Image(img_url) {
    let img = new Image()
    img.src = img_url
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  submitImages() {
    // check current state
    if(this.state.croppedURL1 == null || this.state.croppedURL2 == null){
      this.setState({noImagesError: true})
      return
    }
    this.setState({noImagesError: false})
    this.setState({isLoading: true})

    // transform image to base64
    let img1_b64 = this.getBase64Image(this.state.croppedURL1)
    let img2_b64 = this.getBase64Image(this.state.croppedURL2)

    // construct query
    const queryUrl = this.API_URL + '/mix'
    const queryProps = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        base_img: ""+img1_b64,
        style_img: ""+img2_b64
      })
    }

    // submit query
    fetch(queryUrl, queryProps)
    .then(async res => {
      const data = await res.json()     // convert to json
      // if error
      if(!res.ok){
        if(data && data.message){
          this.showError(data.message)
          console.error("Error: " + data.message)
        }
        else{
          this.showError()
          console.error("Error: Unknown")
        }
      }
      // if normal
      else{
        this.showResult(data.result_img)
      }
    })
    // if network error
    .catch((err) => {
      this.setState({resultError: err.toString()})
      console.error("Unknown error ", err.toString())
    })
    // after completion tasks
    .finally(() => {
      this.setState({isLoading: false})
    })
  }

  // display resulting image of mix
  showResult(resultImageB64) {
    this.setState({resultURL: 'data:image/png;base64,' + resultImageB64, resultError: null})
  }

  // display error message
  showError(message="Unknown error, please try again later") {
    this.setState({resultError: message})
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
        {this.state.noImagesError && (
          <TextMedium color='#FF2222'>Please select both images</TextMedium>
        )}
        {this.state.isLoading && (
          <TextMedium>Processing images...</TextMedium>
        )}
        {this.state.resultError && (
          <TextMedium color='#FF2222'>{this.state.resultError}</TextMedium>
        )}
        <Button
          bg = 'gray.500' color='white'
          _hover={{bg: 'gray.500'}} rounded='1px' h='100%'
          onClick={() => this.submitImages()}
          px='20px' py='5px'
        >
          <TextMedium>
            Submit
          </TextMedium>
        </Button>
        {this.state.resultURL && (
          <CKImage maxH='100%' maxW='100%' my='10px' alt="N/A" src={this.state.resultURL}/>
        )}
      </ShowBlock>
    )
  }

  
}

export default GFCInterface;