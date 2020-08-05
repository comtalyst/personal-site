import React from 'react';
import { Button, Text, Box, Flex, Grid, Collapse, Link, Icon, Divider } from "@chakra-ui/core";
import { TextMedium, TextBig } from './Texts';
import { ButtonCollapse, LinkOut } from './Buttons';
import { Empty, TagBoxes } from './Layouts';
import { exist } from '../utils';
import { DividerBold } from './Decors';

function ShowList(props) {
  const {rows, collapseTitle} = props

  const [show, setShow] = React.useState(Array(rows.length).fill(false));        // collapsible row list state management
  const handleToggle = (idx) => {
    let nshow = Array.from(show)
    nshow[idx] = !nshow[idx]
    setShow(nshow)
  }

  return rows.map((row, idx) => {
    const {name, color, desc, year, keywords, link, source, extras} = row
    return (
      <Flex direction='column' mx='20px' ml='30px'>
        {               // Divider between row rows
          idx !== 0? 
          <DividerBold/>
          :<Empty my='1.5rem'/>
        }
        <Grid templateColumns={{ base: "1fr", md: "auto auto"}} columnGap='0px'>
          <Flex direction='column'>
            <TextBig color={color !== null && color !== undefined? color:'blue.100'}>
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