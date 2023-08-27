import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";

export const Footer = () => {
  return (
    <DIV>
      <Container
        maxW="1500px"
        padding="50px 50px"
        bg="#212121"
        color="white"
      >
        <Box display="flex" justifyContent="space-between"  flexDirection={{lg:"row" , md : "row" , sm : "column" , base : "column" }} textAlign={{lg:"left" , md :"flex" , sm :"center" , base : "center"}}>
<Box   fontFamily="Sofia" sans-serif>Express Electronics</Box>
<Box display="flex" justifyContent="space-around">
   
</Box>

        </Box>
        <br /><br />



        <Box display="flex" justifyContent="space-between"  flexDirection={{lg:"row" , md : "row" , sm : "column" , base : "column" }} textAlign={{lg:"left" , md :"flex" , sm :"center" , base : "center"}} >
          <Box>
            <p className="footer_heading">Information</p> <br />
            <p>Stocks</p>
            <p>Shops</p>
            <p>news</p>
          </Box>
          <br />
          <Box>
            <p className="footer_heading">Customer Services</p> <br />
            <p>Corporate Sales</p>
            <p>Whole sales</p>
            <p>Delivery and payment</p>
            <p>About Company</p>
          </Box> <br />
          <Box>
            <p className="footer_heading">Contact Us</p> <br />
            <p>Service Center</p>
            <p>Terms of use of the site</p>
          </Box> <br />
          <Box>
            <p className="footer_heading">Download our App</p> <br />
            <p>Google Play Sore</p>
            <p>Apple Play Sore</p>
          </Box> <br />
        </Box> <br /><br />
        <Box>© 2023-24 All right are reserved</Box>
        <Box>Made by ❤️ Three Editios.</Box>
      </Container>
    </DIV>
  );
};

const DIV = styled.div`
  .footer_heading {
    font-size: 20px;
    font-weight: bold;
    color: #7f7d7f;
  }
`;
