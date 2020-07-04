import React, {useRef, Component} from 'react';
import { Button, Text, Flex } from "@chakra-ui/core";

const clashRange = 80                         // additional constant for title-buttons clash measurement

class NavigationBar extends Component {
  constructor(){
    super();
    this.state = {        // only for DOM changer variables
      compact: false
    }
    this.buttonsOrigSize = 0
    this.titleSize = 0

    this.buttonsRef = null
    this.setButtonsRef = element => {               // will be called after target element is ready
      if(element != null){
        this.buttonsRef = element
        this.buttonsOrigSize = element.offsetWidth
      }
    }
    this.titleRef = null
    this.setTitleRef = element => {
      if(element != null){
        this.titleRef = element
        this.titleSize = element.offsetWidth
      }
    }

    this.handleResize = () => {
      if(window.innerWidth < this.buttonsOrigSize + this.titleSize + clashRange && !this.state.compact){
        //console.log('compact')
        this.setState({
          compact: true
        })
      }
      else if(window.innerWidth > this.buttonsOrigSize + this.titleSize + clashRange && this.state.compact){
        //console.log('expand')
        this.setState({
          compact: false
        })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  render() {
    const {scrollTo, names} = this.props
    
    return (
      <Flex>
        <Flex h='64px'></Flex>
        <Flex bg='reactDark' w='100%' color='white' py='0' justifyContent='space-between' px='1.5rem' h='64px' 
          alignItems='center' position='fixed'
        >
          <Flex ref={this.setTitleRef}>
            <Text fontSize='xl' letterSpacing='widest' fontWeight='light'>
              Rawin (
            </Text>
            <Text fontSize='xl' letterSpacing='widest' fontWeight='bold' color='blue.400'>
              Robin 
            </Text>
            <Text fontSize='xl' letterSpacing='widest' fontWeight='light'>
              ) Deeboonchai
            </Text>
          </Flex>
          {
            !this.state.compact?
            (
              <Flex h='100%' ref={this.setButtonsRef}>
              {
                names.map((name) => (
                  
                    <Button
                      variant='ghost' color='white'
                      _hover={{bg: '#FFFFFF10'}} rounded='1px' h='100%'
                      _active={{ transform: 'scale(0.9)'}}
                      _focus={{ boxShadow: '0 0 0 0'}}
                      onClick={() => scrollTo(name)}
                    >
                      {name}
                    </Button>
                ))
              }
              </Flex>
            ):
            (
              <Text>Yo</Text>
            )
          }
          
        </Flex>
      </Flex>
    )
  }
}

export default NavigationBar;