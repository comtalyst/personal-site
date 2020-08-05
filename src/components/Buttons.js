import React from 'react';
import {Button, Link, Icon} from "@chakra-ui/core";

export function ButtonCollapse(props) {
  return (
    <Button variant='ghost' color='white'
            _hover={{bg: '#FFFFFF10'}} rounded='3px'
            _active={{ transform: 'scale(0.9)'}}
            _focus={{ boxShadow: '0 0 0 0'}}
            rightIcon="chevron-down"
            w='fit-content'
            pl='0'
            pr='2' 
            {...props}>
      {props.children}
    </Button>
  )
}

export function LinkOut(props) {
  return (
    <Link isExternal color='blue.300'
          {...props}>
      {props.children} <Icon name="external-link" mx="1px" />
    </Link>
  )
}