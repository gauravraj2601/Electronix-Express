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
  Input,
  InputGroup, InputLeftElement, ButtonGroup 
} from "@chakra-ui/react";







import { HamburgerIcon, SearchIcon  } from "@chakra-ui/icons";
import debounce from "lodash/debounce";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useSearchParams,Navigate  } from "react-router-dom";

import { styled } from "styled-components";
import { logoutAction } from "../Redux/Authentication/action";

const Navbar = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const isAdminAuth= useSelector(store=>store.authReducer.isAuthAdmin)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems= useSelector((store)=>store.productReducer.cart);
  const wishlistItems= useSelector((store)=>store.productReducer.wishlist);
  const location= useLocation();
  const [search, setSearch]= useState("");
  const [searchParams, setSearchParams]= useSearchParams();
  const dispatch= useDispatch();
  const name=useSelector(store=>store.authReducer.name);
  console.log(name)


  const navList = [
    { to: "/", title: "Home" },
    { to: isAdminAuth? "/admin": "/product", title: isAdminAuth? "Admin" : "AllProduct" },
    { to: "/wishlist", title: `WishList (${wishlistItems.length})` },
    { to: "/cartitems", title: `Cart (${cartItems?.length})` },
  ];

  const debouncedSetSearch = debounce((value) => {
    setSearch(value);
  }, 1000); 

  const handleSearch=(e)=>{
    const {value}=e.target;
    debouncedSetSearch(value); 
  }
  const handleLogout=()=>{
    dispatch(logoutAction())
  }
  useEffect(()=>{
    let params={
    }
    search && (params.search=search) 
     setSearchParams(params)
  },[search])
  return (
    // <div>Navbar</div>
    <DIV>
      <Box
        bg="blackAlpha.500"
       
        p={5}
        color="black"
        display="flex"
        justifyContent="space-between"
       
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
          {/* <img src={logo} alt="logo" /> */}
          <Heading
            fontSize={{ lg: "20px", md: "18px", sm: "15px", base: "15px" }}
            fontFamily="Sofia"
            sans-serif
            textShadow="3px 3px 3px #ababab"
          
          >
            Express Electronics
          </Heading>
        </Box>

            {/* Search bar */}

        {location.pathname==="/product" && 
        <Box marginTop="-10px" marginBottom="-10px">
        <InputGroup borderColor="gray" borderWidth="1px" borderRadius="md">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray" />
          </InputLeftElement>
          <Input type="search" placeholder="Search" onChange={handleSearch} />
        </InputGroup>
      </Box>
        }

        <Box
          width="50%"
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          justifyContent="space-around"
        >
          {navList.map((link, index) => (
            
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

          {isAuth && <Text fontSize="17px" fontWeight="bold" color="teal" fontFamily="Open Sans sans-serif">{name}</Text>}

          {/* Login and LogOut Logic */}
          {isAuth || isAdminAuth ? (
            <button style={{color:"red", fontWeight:"bold"}} onClick={handleLogout}>

              <NavLink>LogOut</NavLink>
            </button>
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
        <Box display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}>
          <Button bg="blackAlpha.500" color="white" onClick={onOpen}>
            {<HamburgerIcon />}
          </Button>
          <Drawer isOpen={isOpen} placement="Right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent onClick={onClose} height="300px">
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
                          marginTop: "20px",
                          textAlign: "center",
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
                      marginTop="20px"
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
                          marginTop: "20px",
                          textAlign: "center",
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
  position: sticky;
  top: 0px;
  z-index:1;

 
  /* background:black; */

 
  * {
    font-family: "Trirong", serif;
  }

`;
