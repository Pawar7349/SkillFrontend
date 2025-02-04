import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';

import React from 'react';
import {Link} from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';
import me from "../../assets/images/pratik.png";
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () =>(
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
      src={me}
      boxSize={['40','48']}
      />

      <Text children="Co-Founder" opacity={0.7}/>
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
      <Heading children="Pratik Pawar" size={['md','x1']}/>
      <Text
      textAlign={['center', 'left']}
      children={`Hi, I am a full-stack developer and a teacher.
      Our mission is to provide quality content at reasonable price.`}
      />
    </VStack>
  </Stack>
);

const VideosPlayer = () =>(
  <Box>
    <video
    autoPlay
    loop
    muted
    controls
    controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    src={introVideo}
    >
    </video>
  </Box>
);

const TandC = () =>(
  <Box>
    <Heading
     size={'md'}
     children ="Terms & Condition"
     textAlign={['center', 'text']}
     my= '4'
     />

    <Box h="sm" p="4" overflow={'scroll'}>
      <Text
      fontFamily={'heading'}
      letterSpacing={'widest'}
      textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
      my="4"
      size={'xs'}
      children = "Refund only applicable for cancellation within 7 days."
       />
    </Box>
  </Box>
);

const About = () =>{
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']}/>
      <Founder />
      <Stack  m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m='8' textAlign='center'>
        We are a video streaaming platform with some premium courses available
        only for premium users.
        </Text>

        <Link to='/subscribe'>
          <Button variant={'ghost'} colorScheme='yellow'>
             Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideosPlayer />

      <TandC termsAndCondition={termsAndCondition}/>

      <HStack my="4" p={'4'}>
      <RiSecurePaymentFill />
      <Heading
      size = {'xs'}
      fontFamily="sans-serif"
      textTransform={'uppercase'}
      children={'Payment is secured by Razorpay'}
      />

      </HStack>
    </Container>
  );
};


export default About;