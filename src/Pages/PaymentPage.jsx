import { Box, Button, Container, FormControl } from "@chakra-ui/react";
import React from "react";
import {
  FormLabel,
  Input,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderSuccess } from "../Redux/GetProducts/action";

export const PaymentPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const handlePayment = (e) => {
    e.preventDefault();
    onOpen();
    setTimeout(() => {
      dispatch(orderSuccess())
      navigate("/");
    }, 2000);
  };

  document.body.style.backgroundImage =
    "url(https://img.freepik.com/free-vector/white-abstract-background_23-2148817571.jpg?w=1060&t=st=1690173262~exp=1690173862~hmac=6d5cd69733f40fb9db2dd6a46ef7a5a2c437edfdba125f9292746e4bbe5d518d)";

  return (
    <DIV>
      <Container maxW="1200px">
        {" "}
        <br />
        <br />
        <p className="payment_Text">Payment Details</p> <br />
        <br />
        <Box
          display="flex"
          justifyContent="center"
          gap="20px"
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        >
          <Button width="300px" bg="white" variant="outline" colorScheme="teal">
            Paypal
          </Button>
          <Button width="300px" bg="black" colorScheme="teal">
            GooglePay
          </Button>
        </Box>{" "}
        <br /> <br />
        <p className="payment_Text">Or Checkout using a Credit Card</p> <br />
        <br />
        <Container
          padding="30px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        >
          <Box>
            <form onSubmit={handlePayment}>
              <FormControl isRequired>
                <FormLabel>Cardholder name</FormLabel>
                <Input type="text" placeholder="name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Card number</FormLabel>
                <Input
                  type="number"
                  placeholder="xxxx xxxx xxxx"
                  maxLength="12"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Expiration</FormLabel>
                <Input type="date" placeholder="xxxx xxxx xxxx" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Cvv</FormLabel>
                <Input type="number" placeholder="xxx" maxLength="3" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Postal Code</FormLabel>
                <Input
                  type="number"
                  placeholder="postal zip code"
                  
                />
              </FormControl>{" "}
              <br /> <br />
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="door no/locality/city"
                  
                />
              </FormControl>{" "}
              <br />
              <br />
              <Button width="300px" colorScheme="teal" type="submit">
                Make Payment
              </Button>{" "}
              <br />
              <br />
            </form>
            {/* modal */}
            <Modal isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <img
                    src="https://media3.giphy.com/media/1wX5TJZPqVw3HhyDYn/giphy.gif?cid=6c09b952tdbgt7fl8aiz8lqol27kr4hi3ilgb5dft7e8crix&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                    alt=""
                    width="100px"
                  />{" "}
                </Center>
                <ModalBody>
                  <Center>
                    <br />
                    <br />
                    <Heading
                      color="teal"
                      size="md"
                      fontFamily="Sofia, sans-serif"
                    >
                      Congratulation !
                    </Heading>
                    <br />
                    <br />
                  </Center>
                  <Center>
                    <Text fontFamily="Sofia, sans-serif">
                      Your order SuccessFully placed
                    </Text>
                  </Center>
                  <br />
                  <Center>
                    <Text fontFamily="Sofia, sans-serif">
                      Keep Visiting again !
                    </Text>
                  </Center>
                  <br />
                  <Center>
                    <Text fontFamily="Sofia, sans-serif" color="teal">
                      Thank you !
                    </Text>
                  </Center>
                  <br />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Container>
      </Container>{" "}
      <br />
      <br />
      <br />
      <br />
    </DIV>
  );
};

const DIV = styled.div`
  .payment_Text {
    font-size: 20px;
    font-weight: bold;
  }
`;
