import {Box, Heading, HStack, Stack, VStack} from '@chakra-ui/react';
import React from 'react';
import {TiSocialInstagramCircular} from "react-icons/ti";
import { DiGithub } from 'react-icons/di';
import {TiSocialLinkedinCircular} from "react-icons/ti";



const Footer = () =>{
  return(
    <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'}>
      <Stack direction={['column', 'row']}> 
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'}></Heading>
          <Heading
            fontFamily={'body'}
            size="sm"
            children = "@Pratik Pawar"
            color={'teal.400'}
          ></Heading>
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href='https://www.linkedin.com/in/pratik-pawar-600731237/' target={'blank'}>
            <TiSocialLinkedinCircular />
          </a>
          <a href='https://www.instagram.com/pratik.pawar1/' target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href='https://github.com/Pawar7349' target={'blank'}>
          <DiGithub />
          </a>
      </HStack>
    </Stack>
    </Box>
  )
}

export default Footer