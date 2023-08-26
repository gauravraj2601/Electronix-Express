import { Box, Button, Container } from "@chakra-ui/react";
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

export const PaymentPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlePayment = (e) => {
    e.preventDefault();
    onOpen();
  };

  return (
    <>
      <Container border="1px solid red" maxW="1200px">
        <p>Payment Details</p>

        <Box display="flex" justifyContent="center" gap="20px">
          <Button width="300px" bg="white" variant="outline" colorScheme="teal">
            Paypal
          </Button>
          <Button width="300px" bg="black" colorScheme="teal">
            GooglePay
          </Button>
        </Box>
        <p>Or Checkout using a Credit Card</p>
        <Container border="1px solid blue">
          <Box>
            <form onSubmit={handlePayment}>
              <FormLabel>Cardholder name</FormLabel>
              <Input type="text" placeholder="name" />
              <FormLabel>Card number</FormLabel>
              <Input
                type="number"
                placeholder="xxxx xxxx xxxx"
                minLength="12"
              />
              <FormLabel>Expiration</FormLabel>
              <Input type="date" placeholder="xxxx xxxx xxxx" />
              <FormLabel>Cvv</FormLabel>
              <Input type="number" placeholder="xxx" minLength="3" />
              <FormLabel>Postal Code</FormLabel>
              <Input
                type="number"
                placeholder="postal zip code"
                minLength="6"
              />{" "}
              <br /> <br />
              <Button width="300px" colorScheme="teal" type="submit">
                Make Payment
              </Button>
            </form>
            // modal
            <Modal isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
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
      </Container>
    </>
  );
};
