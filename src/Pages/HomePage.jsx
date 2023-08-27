import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/GetProducts/action";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = useSelector((store) => store.productReducer.products);
  const isLoading = useSelector((store) => store.productReducer.isLoading);

  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(isLoading);

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
          fontFamily="'Trirong', serif"
          sans-serif
          marginLeft={{ lg: "130px", md: "130px" }}
          marginBottom="40px"
          color="teal"
        >
          Trending Categories
        </Heading>
        <Container
          className="trending"
          maxW="1300px"
          display="flex"
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
          justifyContent="space-around"
          alignItems="center"
          marginTop={{ sm: "20px", base: "30px" }}
        >
          <Link to="/product">
            <Box>
              <Image
                src="https://m.media-amazon.com/images/I/51eGaaoQ1mL._AC_SY200_.jpg"
                className="trending_img"
                height="100px"
              />
              <p className="trend">Mobile</p>
            </Box>
          </Link>

          <Link to="/product">
            <Box>
              <Image
                src="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
                className="trending_img"
                height="110%"
              />
              <p className="trend">Speaker</p>
            </Box>
          </Link>


          <Link to="/product">

            <Box>
              <Image
                src="https://m.media-amazon.com/images/I/511mMK0LW2L._AC_UY327_FMwebp_QL65_.jpg"
                className="trending_img"
                height="100px"
              />
              <p className="trend">Tablet</p>
            </Box>
          </Link>

          <Link to="/product">

            <Box>
              <Image
                src="https://m.media-amazon.com/images/I/51DmOWr3rnL._AC_UL600_FMwebp_QL65_.jpg"
                className="trending_img"
                height="100px"
              />
              <p className="trend">Laptop</p>
            </Box>
          </Link>


          <Link to="/product">

            <Box>
              <Image
                src="https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UY327_FMwebp_QL65_.jpg"
                className="trending_img"
                height="100px"
              />
              <p className="trend">Headphones</p>
            </Box>
          </Link>
        </Container>
      </Box>
      <br />
      <br />
      <Container
        display="flex"
        justifyContent="space-around"
        maxW="1300px"
        gap="30px"
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        <Box
          width={{ lg: "45%", md: "45%", sm: "100%", base: "100%" }}
          className="ndProducts"
        >
          <Text color="teal" fontWeight="bold">
            Smart Television
          </Text>{" "}
          <br />
          <Text fontWeight="bold">just strting at ₹ 450</Text> <br />
          <Link to="/product">
            {" "}
            <Button variant="outline" colorScheme="teal">
              Shop now
            </Button>
          </Link>
          <br />
          <br />
          <Image
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/3/i/qa85qn90cakxxl-samsung-original-imagp9xdrcnf5rx9.jpeg?q=70"
            alignItems="center"
            objectFit="cover"
            height="200px"
            margin="auto"
          />
        </Box>
        <Box
          className="ndProducts"
          width={{ lg: "45%", md: "45%", sm: "100%", base: "100%" }}
        >
          <Text color="teal" fontWeight="bold">
            Smart Watch
          </Text>{" "}
          <br />
          <Text fontWeight="bold">just strting at ₹ 450</Text> <br />
          <Link to="/product">
            {" "}
            <Button variant="outline" colorScheme="teal">
              Shop now
            </Button>
          </Link>{" "}
          <br />
          <br />
          <Image
            src="https://rukminim2.flixcart.com/image/612/612/ko0d6kw0/smartwatch/r/m/a/1-59-fb511glpk-android-ios-fitbit-original-imag2kfgsfyq6ec6.jpeg?q=70"
            alignItems="center"
            objectFit="cover"
            height="200px"
            margin="auto"
          />
        </Box>
      </Container>
      <br />
      <br />
      <Container maxW="1300px">
        <Heading textAlign="left" fontFamily="'Trirong', serif" sans-serif color="teal">
          Latest Product
        </Heading>{" "}
        <br />
        <br />
        <Box
          className="latest_product"
          display="grid"
          gap="10px"
          gridTemplateColumns={{
            lg: "repeat(5, 1fr)",
            md: "repeat(5, 1fr)",
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
        >
          {products.map(
            (item, id) => id < 5 && <ProductCard key={item.id} {...item} />
          )}
        </Box>
      </Container>
      <br />
      <br /> <br />
      <Box>
        {" "}
        <Image src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692864517/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Rotating%20Deals/August/25th%20Aug/HP_TWS_25Aug2023_fkxdle.jpg?tr=w-2048" />{" "}
      </Box>{" "}
      <br /> <br /> <br />
      <Container maxW="1300px">
        <Heading textAlign="left" fontFamily="'Trirong', serif" sans-serif color="teal">
          Popular Product
        </Heading>{" "}
        <br />
        <br />
        <Box
          className="latest_product"
          display="grid"
          gap="10px"
          gridTemplateColumns={{
            lg: "repeat(5, 1fr)",
            md: "repeat(5, 1fr)",
            sm: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
        >
          {products.map(
            (item, id) =>
              id >= 11 && id < 21 && <ProductCard key={item.id} {...item} />
          )}
        </Box>
      </Container>{" "}
      <br />
      <br />
      <Container
        display="flex"
        justifyContent="space-around"
        maxW="1300px"
        gap="30px"
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        paddingTop="30px"
        paddingBottom="30px"
      >
        <Box>
          <p className="customer_help" fontFamily="'Trirong', serif" sans-serif>
            Flexible Pricing Policy
          </p>{" "}
          <br />
          <p>
            Always competeive price and an extensive loyalty program for our
            customers{" "}
          </p>
        </Box>
        <Box>
          <p className="customer_help" fontFamily="'Trirong', serif" sans-serif>
            A team of professionals
          </p>{" "}
          <br />
          <p>
            Experienced specialists who have been certified by world vendors{" "}
          </p>
        </Box>
        <Box>
          <p className="customer_help" fontFamily="'Trirong', serif" sans-serif>
            Extensive work experience
          </p>{" "}
          <br />
          <p>
            And we continue to develop successfully as well as our customers{" "}
          </p>
        </Box>
        <Box>
          <p className="customer_help" fontFamily="'Trirong', serif" sans-serif>
            Free shipping
          </p>{" "}
          <br />
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

  .trending_img {
    width: 100px;
  }
  .trend {
    margin-top: 60px;
    margin-bottom: 40px;
    text-align: center;
    align-items: center;
    font-weight: bold;
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
  .ndProducts {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  * {
    font-family: "Trirong", serif;
  }
`;
