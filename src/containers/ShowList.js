import React from 'react';
import { Image, Text, Box, Flex, Grid, Collapse, Link, Icon, Divider, PseudoBox } from "@chakra-ui/core";
import { TextMedium, TextBig } from '../components/Texts';
import { ButtonCollapse, LinkOut } from '../components/Buttons';
import { Empty, TagBoxes } from '../components/Layouts';
import { exist } from '../utils';
import { DividerBold } from '../components/Decors';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ShowList(props) {
  const {rows, collapseTitle} = props

  const [show, setShow] = React.useState(Array(rows.length).fill(true));        // collapsible row list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return (<Box mt='36px'>{rows.map((row, idx) => {
    const {name, color, desc, year, keywords, link, source, extras, logo} = row
    return (
      <Flex direction='column' pt='20px' px='20px' pl='30px' w='100%' alignItems='center'>
        {               // Divider between row rows
          idx !== 0? 
          <DividerBold w='100%' maxW='1200px'/>
          :<Empty my='1.5rem'/>
        }
        <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px' w='100%' maxW='1200px' mb='12px'>
          <Flex direction='row' align='flex-start'>
          {
            logo == null?
            (<Box/>):
            (<Image src={logo} alt='logo' w='120px' objectFit='contain' pt='10px' pr='30px'/>)
          }
          <Flex direction='column'>
            <TextBig color={color !== null && color !== undefined? color:'blue.100'} fontWeight='bold' mb='12px'>
              {name}
            </TextBig>
            {
              exist(desc)?
              <TextMedium maxW='1000px' mb='12px'>
                {desc}
              </TextMedium>:
              <Empty mb='12px'/>
            }
            <Flex alignItems='center'>
              {
                exist(collapseTitle) && exist(keywords)?
                <ButtonCollapse color='white' onClick={() => handleToggle(idx)} fontWeight='normal' letterSpacing='wider'>
                  {collapseTitle}
                </ButtonCollapse>:
                <Empty/>
              }
              {
                exist(link)?
                <Link isExternal href={link}>
                  <PseudoBox as={FaExternalLinkAlt} size='20px' mx='10px' 
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.2)'}}/>
                </Link>
                :
                <Empty/>
              }
              {
                exist(source)?
                <Link isExternal href={source}>
                  <PseudoBox as={FaGithub} size='20px' mx='10px' 
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)" _hover={{ transform: 'scale(1.2)'}}/>
                </Link>
                :
                <Empty/>
              }
            </Flex>
            <Collapse mt={1} isOpen={show[idx]}>
              {
                exist(keywords)?
                <TagBoxes keywords={keywords}/>:
                <Empty/>
              }
            </Collapse>
          </Flex>
          </Flex>
          {
            exist(year)?
            <TextBig ml='20px' textAlign='right'>
              {year}
            </TextBig>:
            <Empty/>
          }
        </Grid>
        {exist(extras)? extras:<Empty/>}
      </Flex>
    )
  })}</Box>)
        
}

export default ShowList;