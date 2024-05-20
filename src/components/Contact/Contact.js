import React,{useEffect, useState} from "react";
import {Container, VStack, Box, Input, Button, FormControl, FormLabel, Heading, Textarea} from '@chakra-ui/react';
import {Link} from "react-router-dom";
//import { useDispatch, useSelector} from 'react-redux';
//import {toast} from 'react-hot-toast';


const Contact = () =>{
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const[name, setName]= useState("");
  //const useDispatch = useDispatch();
   
  // const {
  //   loading,
  //   error,
  //   message : stateMessage,
  // } = useSelector(state => state.other);


  const submitHandler = e =>{
    e.preventDefault();
    //dispatch(contactUs(name, email, message));
  };

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }

  const handleMessage = (e) =>{
    setMessage(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }


  // useEffect(()=>{
  //   if(error){
  //     toast.error(error);
  //     //dispatch({type:'clearError'});
  //   }

  //   if(stateMessage){
  //     toast.success(stateMessage);
  //     //dispatch({type: 'clearMessage'});
  //   }
  // }, [error, stateMessage]);

  return(
    <>
      <Container h={"95vh"}>
        <VStack h={"full"} justifyContent="center">
          <Heading  fontSize={"28"} textAlign={["center", "left"]}>
            Contact Us
          </Heading>

          <form style={{width: '100%'}} onSubmit={submitHandler}>
            <Box my={"4"}>
            <FormControl isRequired>
              <FormLabel htmlFor ="name">Name</FormLabel>
              <Input placeholder="Enter Your name" id="name" focusBorderColor="teal.400" value={name} onChange={handleName} type={'text'} />
            </FormControl>
            </Box>

            <Box my={"4"}>
               <FormControl isRequired>
                 <FormLabel>Email Address</FormLabel>
                 <Input placeholder="abc@gmail.com" id="email" focusBorderColor="teal.400" onChange={handleEmail} value={email}/>
               </FormControl>
            </Box>

            <Box my={"4"}>
              <FormControl isRequired>
                <FormLabel htmlFor="message" >Message</FormLabel>
                <Textarea  placeholder='Your Query.....' id="message" focusBorderColor='teal.400' value={message} onChange={handleMessage} type={"text"} />
              </FormControl>
            </Box>

            <Box my={"4"}>
              <Button colorScheme="teal" variant='solid' type="submit">Submit</Button>
            </Box>

            <Box>
              <span>Request for the Course {' '}</span>
              <Link>
                <Button variant="link" color={"teal"} className="registerTxt" style={{textDecoration: "none"}}>Click</Button>
              </Link>
              {" "} here
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  )
}


export default Contact;