import React from 'react';
import { Image, Text, Box, Flex, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";
import { TextMedium, TextBig } from '../components/Texts';
import { ButtonCollapse, LinkOut } from '../components/Buttons';
import { Empty, TagBoxes } from '../components/Layouts';
import { exist } from '../utils';
import { DividerBold } from '../components/Decors';

function ShowList(props) {
  const {rows, collapseTitle} = props

  const [show, setShow] = React.useState(Array(rows.length).fill(true));        // collapsible row list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return rows.map((row, idx) => {
    const {name, color, desc, year, keywords, link, source, extras, logo} = row
    return (
      <Flex direction='column' pt='20px' px='20px' pl='30px' w='100%' alignItems='center'>
        {               // Divider between row rows
          idx !== 0? 
          <DividerBold w='100%' maxW='1200px'/>
          :<Empty my='1.5rem'/>
        }
        <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px' w='100%' maxW='1200px'>
          <Flex direction='row' align='flex-start'>
          {
            logo == null?
            (<Box/>):
            (<Image src={logo} alt='logo' w='120px' objectFit='contain' pt='10px' pr='30px'/>)
          }
          <Flex direction='column'>
            <TextBig wrap='true' color={color !== null && color !== undefined? color:'blue.200'}>
              {name}
            </TextBig>
            {
              exist(desc)?
              <TextMedium maxW='1000px'>
                {desc}
              </TextMedium>:
              <Empty/>
            }
            <Flex alignItems='center'>
              {
                exist(collapseTitle) && exist(keywords)?
                <ButtonCollapse color='gray.400' onClick={() => handleToggle(idx)}>
                  {collapseTitle}
                </ButtonCollapse>:
                <Empty/>
              }
              {
                exist(link)?
                <LinkOut href={link} mx='5px'>
                  Link
                </LinkOut>:
                <Empty/>
              }
              {
                exist(source)?
                <LinkOut href={source} mx='5px'>
                  Source
                </LinkOut>:
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
  })
        
}

export default ShowList;