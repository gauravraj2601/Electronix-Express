import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Img,
} from "@chakra-ui/react";
// import React from "react";
import React, { useEffect } from 'react'
import { styled } from "styled-components";
import poster from "../Components/Images/poster-1.jpg";
import poster1 from "../Components/Images/poster_2.jpg";
import poster3 from "../Components/Images/poster_3.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../Redux/GetProducts/action";
import ProductCard from "../Components/ProductCard";


const HomePage = () => {
  const products= useSelector((store)=>store.productReducer.products);
  const dispatch = useDispatch();
  console.log(products)
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  
  return (
    <DIV>
      <Box>
        <Box className="cont">
          <Image src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692864516/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/August/25th%20Aug/HP_Oppo_25aug2023_ns8eo0.jpg?tr=w-2048" />{" "}
        </Box>
      </Box>
      <Box
        className="trending_Categories"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
        // border="1px solid red"
      >
        <Heading
          fontFamily="Sofia"
          sans-serif
          marginLeft={{ lg: "130px", md: "130px" }}
          marginBottom="40px"
        >
          Trending Categories
        </Heading>
        <Container
          className="trending"
          // border="1px solid red"
          maxW="container.lg"
          display="flex"
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
          justifyContent="space-around"
          alignItems="center"
          marginTop={{ sm: "20px", base: "30px" }}
        >
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend">Mobile</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
              className="trending_img"
              height="110%"
            />
            <p className="trend">Speaker</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/511mMK0LW2L._AC_UY327_FMwebp_QL65_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend">Tablet</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51DmOWr3rnL._AC_UL600_FMwebp_QL65_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend">Laptop</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UY327_FMwebp_QL65_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend">Accessories</p>
          </Box>
        </Container>
      </Box>
      <br />
      <br />
      <Container
        display="flex"
        // border="1px solid red"
        justifyContent="space-around"
        maxW="container.lg"
        gap="30px"
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        <Box
          // border="1px solid red"
          width={{ lg: "45%", md: "45%", sm: "100%", base: "100%" }}
        >
          <p>Smart Camera</p> <br />
          <p>just strting at 450</p> <br />
          <Button>Shop now</Button> <br />
          <br />
          <Image
            src="https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UY327_FMwebp_QL65_.jpg"
            alignItems="center"
            objectFit="cover"
            height="200px"
            margin="auto"
          />
        </Box>
        <Box
          border="1px solid red"
          width={{ lg: "45%", md: "45%", sm: "100%", base: "100%" }}
        >
          <p>Smart Camera</p> <br />
          <p>just strting at 450</p> <br />
          <Button>Shop now</Button> <br />
          <br />
          <Image
            src="https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UY327_FMwebp_QL65_.jpg"
            alignItems="center"
            objectFit="cover"
            height="200px"
            margin="auto"
          />
        </Box>
       </Container> 
       {/* <Box
        className="trending_Categories"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
        border="1px solid red"
      >
        <Heading
          fontFamily="Sofia"
          sans-serif
          marginLeft={{ lg: "130px", md: "130px" }}
          marginBottom="40px"
        >
          Latest Products
        </Heading>
        <Container
          className="trending"
          // border="1px solid red"
          maxW="container.lg"
          display="flex"
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
          justifyContent="space-around"
          alignItems="center"
          marginTop={{ sm: "20px", base: "30px" }}
        >
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend_1">Mobile</p>
            <p className="trend_2"> $ 120</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
              className="trending_img"
              height="110%"
            />
            <p className="trend_1">Speaker</p>
            <p className="trend_2"> $ 120</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/511mMK0LW2L._AC_UY327_FMwebp_QL65_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend_1">Tablet</p>
            <p className="trend_2"> $ 120</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/51DmOWr3rnL._AC_UL600_FMwebp_QL65_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend_1">Laptop</p>
            <p className="trend_2"> $ 120</p>
          </Box>
          <Box>
            <Image
              src="https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UY327_FMwebp_QL65_.jpg"
              className="trending_img"
              height="100px"
            />
            <p className="trend_1">Accessories</p>
            <p className="trend_2"> $ 120</p>
          </Box>
        </Container> 
      </Box>{" "}  */}
<br /><br />
<Container  maxW="1300px">
  <Heading textAlign="left">Latest Product</Heading> <br /><br />

      <Box className="latest_product" >
        {
          products.map((item,id)=>id < 10 && (
            <ProductCard  key={item.id} {...item} />

          ))
        }
      </Box>
      </Container>
      <br />
      <br /> <br />
      <Box>
        {" "}
        <Image src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692864517/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/August/25th%20Aug/HP_TWS_25Aug2023_fkxdle.jpg?tr=w-2048" />{" "}
      </Box>{" "}
      <br /> <br /> <br />
      <Container
        display="flex"
        border="1px solid red"
        justifyContent="space-around"
        maxW="1300px"
        gap="30px"
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        paddingTop="30px"
        paddingBottom="30px"
      >
        <Box>
          <p className="customer_help">Flexible Pricing Policy</p> <br />
          <p>
            Always competeive price and an extensive loyalty program for our
            customers{" "}
          </p>
        </Box>
        <Box>
          <p className="customer_help">A team of professionals</p> <br />
          <p>
            Experienced specialists who have been certified by world vendors{" "}
          </p>
        </Box>
        <Box>
          <p className="customer_help">Extensive work experience</p> <br />
          <p>
            And we continue to develop successfully as well as our customers{" "}
          </p>
        </Box>
        <Box>
          <p className="customer_help">Free shipping</p> <br />
          <p>Operational logistics at the expense of the supplier </p>
        </Box>
      </Container>{" "}
      <br /> <br />
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
    top: 70%;
    right: 10%;
    color: teal;
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
    /* border: 1px solid teal; */
    /* border-radius:50%;
    padding:  10px ; */
  }
  .trend {
    margin-top: 60px;
    margin-bottom: 40px;
    text-align: center;
    align-items: center;
  }
  .trend_1 {
    margin-top: 60px;
    margin-bottom: 20px;
    text-align: center;
    align-items: center;
  }
  .trend_2 {
    text-align: center;
    color: teal;
    margin-bottom: 20px;
  }
  .customer_help {
    font-size: 20px;
    color: teal;
    text-align: "left";
  }
  /* .trending_img{
    border-radius:1px solid red;
  } */
  .latest_product{
    
        border: 1px solid green;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
  }
`;
