import React, {Component} from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core";
import { TextMedium } from '../components/Texts';

const clashRange = 220                         // additional constant for title-buttons clash measurement
export const barHeight = 48

class NavigationBar extends Component {
  constructor(){
    super();
    this.state = {        // only for DOM changer variables
      compact: false
    }
    this.buttonsOrigSize = 0
    this.titleSize = 0

    this.buttonsRef = null
    this.setButtonsRef = element => {               // callback after target element is ready
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
    const {navClick, names} = this.props
    
    return (
      <Flex>
        <Flex h={barHeight + 'px'}></Flex>
        <Flex bg='reactDark' w='100%' color='white' py='0' justifyContent='space-between' px={this.state.compact? "1.5rem":"6rem"} h={barHeight + 'px'}
          alignItems='center' position='fixed' zIndex={100} boxShadow='2xl'
        >
          <Flex ref={this.setTitleRef}>
            <Text fontSize='xl' letterSpacing='wider' color='blue.400' fontWeight='bold'>
              Robin D.
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
                    onClick={() => navClick(name)}
                    px='20px'
                  >
                    <TextMedium>
                      {name}
                    </TextMedium>
                  </Button>
                ))
              }
              </Flex>
            ):
            (
              <Menu>
                <MenuButton as={Button} rightIcon="chevron-down"
                  variant='ghost' color='white'
                  _hover={{bg: '#FFFFFF10'}} rounded='1px' h='100%'
                  _active={{ transform: 'scale(0.9)'}}
                  _focus={{ boxShadow: '0 0 0 0'}}
                >
                
                </MenuButton>
                <MenuList bg='reactDark' color='white' borderColor='#00000000'>
                {
                  names.map((name) => (<MenuItem _focus={{bg: '#FFFFFF10'}} onClick={() => navClick(name)}><TextMedium>{name}</TextMedium></MenuItem>))
                }
                </MenuList>
              </Menu>
            )
          }
          
        </Flex>
      </Flex>
    )
  }
}

export default NavigationBar;