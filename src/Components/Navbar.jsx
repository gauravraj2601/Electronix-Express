import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navList = [
    { to: "/", title: "Home" },
    { to: "/product", title: "AllProduct" },
    { to: "/wishlist", title: "WishList" },
    { to: "/cartitems", title: "Cart" },
  ];

  return (
    // <div>Navbar</div>
    <DIV>
      <Box
        bg="blackAlpha.500"
        filter="transparent"
        p={5}
        color="black"
        display="flex"
        justifyContent="space-between"
        // border="1px solid red"
        width="100%"
        backgroundColor={{
          lg: "blackAlpha.500",
          md: "blackAlpha.500",
          sm: "teal",
          base: "teal",
        }}
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNhUGFu4dD7bEV5Gi4wucfakeCwerh0fnwo5pm0SPlLWeJnVZqEkinYLjuA63B-SlX2I&usqp=CAU"
      >
        <Box alignItems="center" display="flex">
          {/* <img src="./public/Navbar_Logo.jpg" alt="logo" /> */}
          <Heading
            fontSize={{ lg: "20px", md: "18px", sm: "15px", base: "15px" }}
          >
            Express Electronics
          </Heading>
        </Box>

        <Box
          width="50%"
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          justifyContent="space-around"
        >
          {navList.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "blue" : "black",
                  textDecoration: "none",
                };
              }}
            >
              {link.title}
            </NavLink>
          ))}
          {/* Logic for userName Disaplayed as login */}

          {isAuth && <Text fontFamily="Open Sans sans-serif">{}</Text>}

          {/* Login and LogOut Logic */}
          {isAuth ? (
            <NavLink>LogOut</NavLink>
          ) : (
            <NavLink
              to={"/login"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "blue" : "black",
                  textDecoration: "none",
                };
              }}
            >
              Login
            </NavLink>
          )}
        </Box>
        {/* </Box> */}

        {/* Drawer for mobile size Screen */}
        <Box
          display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
          // backgroundColor={{lg:"none" , md:"none" , sm :"teal" ,base:"teal"}}
        >
          <Button bg="blackAlpha.500" color="white" onClick={onOpen}>
            {<HamburgerIcon />}
          </Button>
          <Drawer isOpen={isOpen} placement="Right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box display="flex" flexDirection="column">
                  {" "}
                  {navList.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      fontFamily="Open Sans sans-serif"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                        };
                      }}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                  {isAuth && (
                    <Text fontFamily="Open Sans sans-serif" color="red">
                      {/* {userdata.name} */}
                    </Text>
                  )}
                  {isAuth ? (
                    <Text
                      fontFamily="Open Sans sans-serif"
                      border="1px solid blue"
                      // onClick={handleLogout}
                    >
                      Logout
                    </Text>
                  ) : (
                    <NavLink
                      to="/login"
                      fontFamily="Open Sans sans-serif"
                      border="2px solid red"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                        };
                      }}
                    >
                      Login
                    </NavLink>
                  )}
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
`;
