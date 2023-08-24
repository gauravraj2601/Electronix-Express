import { Box, Button, Container, Image } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";

const HomePage = () => {
  return (
    <DIV>
      {/* <div>HomePage <h1>gusty-adjustment-6018	</h1>

    
    </div> */}
      <Box className="cont">
        {" "}
        <Image
          src={`https://images-eu.ssl-images-amazon.com/images/G/31/img22/wearables/BAU_GW/Tall_Hero_3000X1200_BAU._CB596910925_.jpg`}
        />
        <Button className="btn" colorScheme="black" variant="outline" size="lg">
          Shop now
        </Button>
      </Box>

      <Box className="trending_Categories" textAlign="left">
        <p>Trending Categories</p>
        <Container
          className="trending"
          border="1px solid red"
          maxW="container.lg"
          display="flex"
          justifyContent="space-around"
        >
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
              className="trending_img"
            />
            <p>Mobile</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/cfc686ac-d3fe-4393-a303-ee80755e9e77._CR0,0,1200,628_SX507_QL70_.jpg"
              className="trending_img"
            />
            <p>Mobile</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
              className="trending_img"
            />
            <p>Mobile</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
              className="trending_img"
            />
            <p>Mobile</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
              className="trending_img"
            />
            <p>Mobile</p>
          </Box>
        </Container>
      </Box>
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  .cont {
    position: relative;
  }
  .btn {
    position: absolute;
    top: 90%;
  }
  .trending_Categories {
    margin-top: 30px;
  }
  /* .trending{
  display: flex;
  border: 1px solid red;
  justify-content: space-around;
} */

  .trending_img {
    width: 100px;
  }
`;
