import React, {PureComponent, Component} from 'react';
import ReactCrop from 'react-image-crop';
import {Text, Box, Flex, Input, Image} from "@chakra-ui/core";
import 'react-image-crop/dist/ReactCrop.css';


import { Title, TextBig, HeaderBig } from '../../components/Texts.js';
import ShowBlock from '../../containers/ShowBlock.js';

class ImageSelector extends PureComponent {
  state = {
    img: null,      // current image
    crop: {         // current crop
      unit: '%',
      width: 30,
      aspect: 1
    }
  }

  // upload image; passed to Input component
  onSelectFile = (e) => {
    // if file is valid, bring it on
    if(e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      // if loaded, set the state of current image
      reader.addEventListener('load', () =>
        this.setState({img: reader.result})
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  // retrieve image ref; passed to ReactCrop component
  onImageLoaded = (image) => {
    this.imageRef = image
  }

  // handling after crop; passed to ReactCrop component
  onCropComplete = (crop) => {
    // after a cropping complete, allow the user to make more crops
    this.makeUserCrop(crop)
  }

  // handling crop changes; passed to ReactCrop component
  onCropChange = (crop, percentCrop) => {
    this.setState({crop})
  }

  async makeUserCrop(crop) {
    // as long as image exists and croppable
    if(this.imageRef && crop.width && crop.height) {
      // wait until cropped, then set state
      const croppedImageUrl = await this.getCroppedImage(
        this.imageRef,
        crop,
        'cropped' + this.props.id + '.png'
      )
      this.setState({croppedImageUrl})
    }
  }

  getCroppedImage(image, crop, fileName) {
    const canvas = document.createElement('canvas')
    canvas.width = crop.width
    canvas.height = crop.height
    const context = canvas.getContext('2d')

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    // draw cropped image
    context.drawImage(
      image,
      // we are using the same scale as full image
      crop.x * scaleX, crop.y * scaleY,
      crop.width * scaleX, crop.height * scaleY,
      0, 0,
      crop.width, crop.height
    )

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if(!blob){
          console.error('Canvas is empty')
          return
        }
        blob.name = fileName
        window.URL.revokeObjectURL(this.fileURL)
        this.fileURL = window.URL.createObjectURL(blob)
        resolve(this.fileURL)
      }, 'image/png')
    })
  }

  render(){
    let props = this.props
    const {crop, croppedImageUrl, img} = this.state

    return (
      <Flex direction='column' py='10px' {...props}>
        <Input type="file" accept="image/*" onChange={this.onSelectFile}/>
        {img && (
          <ReactCrop
            src={img}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
          <Image alt="N/A" w="100%" h="100%" src={croppedImageUrl}/>
        )}
      </Flex>
    )
  }
}

class GFCInterface extends Component {
  render(){
    let props = this.props
    return (
      <ShowBlock {...props} bg='trans.gray'>
        <Title>Try it out!</Title>
        <Flex direction='column' px='20px' maxW='1200px'>
          <ImageSelector id='0' />
          <ImageSelector id='1' />
        </Flex>
      </ShowBlock>
    )
  }

  
}

export default GFCInterface;