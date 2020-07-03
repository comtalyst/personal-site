import React from 'react';
import { Button, Text, Box, Flex, Image } from "@chakra-ui/core";
import portrait from '../media/portrait.jpg';

function Profile() {
  return (
    <Flex w='100%' py='6rem' justifyContent='space-between' px='1.5rem' alignItems='center'>
      <Flex w='50%' justifyContent='flex-end' px='3rem'>
        <Image src={portrait} alt='Portrait' size='500px' objectFit='cover' borderRadius='5px'/>
      </Flex>
      <Flex w='50%' justifyContent='flex-end' px='3rem'>
        <Text fontSize='xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla porttitor massa id neque aliquam. Ultrices mi tempus imperdiet nulla malesuada. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Egestas sed sed risus pretium. Lorem dolor sed viverra ipsum. Gravida rutrum quisque non tellus. Rutrum tellus pellentesque eu tincidunt tortor. Sed blandit libero volutpat sed cras ornare. Et netus et malesuada fames ac. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Lacus sed viverra tellus in. Sollicitudin ac orci phasellus egestas. Purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Interdum consectetur libero id faucibus nisl tincidunt eget.
        </Text>
      </Flex>
    </Flex>
  )
}

export default Profile;