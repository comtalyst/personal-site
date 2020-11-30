import React, {PureComponent} from 'react';
import ReactCrop from 'react-image-crop';
import {Flex, Input, Image} from "@chakra-ui/core";
import 'react-image-crop/dist/ReactCrop.css';

class ImageSelector extends PureComponent {
  state = {
    img: null,      // current image
    crop: {         // current crop (init)
      unit: '%',
      width: 100,
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
    canvas.width = image.naturalWidth * (crop.width/image.width)      // canvas size should be scale to the original size
    canvas.height = image.naturalHeight * (crop.height/image.height) 
    const context = canvas.getContext('2d')

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    // draw cropped image
    // doc: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    context.drawImage(
      image,
      // using the same scale as full image to crop properly
      crop.x * scaleX, crop.y * scaleY,
      crop.width * scaleX, crop.height * scaleY,
      0, 0,
      crop.width * scaleX, crop.height * scaleY     // keep the original size
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
      <Flex direction='column' my='10px' mx='10px' w='100%' alignItems='center' {...props}>
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
          <Image maxH='100%' maxW='100%' my='10px' alt="N/A" src={croppedImageUrl}/>
        )}
      </Flex>
    )
  }
}

export default ImageSelector;