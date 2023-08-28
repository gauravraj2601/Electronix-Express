import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Icon, StarIcon } from "@chakra-ui/icons";
import { AiFillTag } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { useToast
} from '@chakra-ui/react';
// import logo from "../Images/logo.png";
import RatingModule from "../Components/RatingModule";
import { addToCart, addToWishlist} from "../Redux/GetProducts/action";
const SingleProducts = () => {
  const { id, averageRating } = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const [data, setData] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isRatingModuleOpen, setIsRatingModuleOpen] = useState(false);
  const wishlistProducts= useSelector(store=>store.productReducer.wishlist);
  const cartItems= useSelector(store=>store.productReducer.cart);
  const dispatch= useDispatch();
  const toast= useToast();

  const handleAddtoWishlist=()=>{
    if(wishlistProducts.find((el)=>el.id===+id)){
      toast({
        title: 'Product.',
        description: "Already Exist in Wishlist.",
        status: 'error',
        duration: 1500,
        isClosable: true,
        position:'top'
      })
    }
    else{
      const wishlist=products.find((el)=>el.id===+id);
      dispatch(addToWishlist(wishlist));
      toast({
        title: 'Product.',
        description: "Added To Wishlist.",
        status: 'success',
        duration: 1500,
        isClosable: true,
        position:'top'
      })
    }
  }

  const handleAddtoCart=()=>{
    if(cartItems.find((el)=>el.id===+id)){
      toast({
        title: 'Product.',
        description: "Already Exist in Cart.",
        status: 'error',
        duration: 1500,
        isClosable: true,
        position:'top'
      })
    }
    else{
      const cart= products.find((el)=>el.id===+id);
      dispatch(addToCart(cart))
      toast({
        title: 'Product.',
        description: "Product Added To Cart.",
        status: 'success',
        duration: 1500,
        isClosable: true,
        position:'top'
      })
    }
  }
  useEffect(() => {
    const product = products.find((el) => el.id === +id);
    console.log(product);
    setData(product);
  }, []);

  return (
    <DIV>
      <div className="sticky-content">
        <img src={data?.image} alt="product-img" />
        <div style={{display:"flex" ,marginLeft:"40px"}}></div>
            <button className="add-button" onClick={handleAddtoCart}>Add To Cart</button>
            <button className="add-button" onClick={handleAddtoWishlist} >Add To Wishlist</button>
      </div>
      <div className="scrollable-content">
        <h5>{data?.name}</h5>
        <div style={{ display: "flex", gap: "15px", marginTop: "5px" }}>
          <div
            style={{
              border: "1px solid green",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              color: "white",
              backgroundColor: "green",
              width: "50px",
              height: "25px",
            }}
          >
            {averageRating}{" "}
            <StarIcon marginBottom="5px" color="white"></StarIcon>{" "}
          </div>
          <p style={{ color: "gray", fontWeight: "600" }}>
            {data?.review?.length} Reviews
          </p>
          {/* <img
            style={{
              width: "20px",
              height: "20px",
              marginTop: "3px",
              marginLeft: "-5px",
            }}
            src={logo}
            alt="logo"
          /> */}
        </div>
        <h3>₹ {data?.price}</h3>

        <div style={{ display: "flex" }}>
          <Icon
            as={AiFillTag}
            boxSize={6}
            color="green"
            bg="white.500"
            rounded="full"
            p={1}
          />
          <p>
            Bank Offer{" "}
            <span style={{ color: "gray" }}>
              5% Cashback on Flipkart Axis Bank Card{" "}
            </span>
            <span style={{ color: "#2874f0" }}>T&C</span>{" "}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <Icon
            as={AiFillTag}
            boxSize={6}
            color="green"
            bg="white.500"
            rounded="full"
            p={1}
          />
          <p>
            Special Price{" "}
            <span style={{ color: "gray" }}>
              Get extra ₹3000 off (price inclusive of cashback/coupon){" "}
            </span>
            <span style={{ color: "#2874f0" }}>T&C</span>{" "}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <Icon
            as={MdDateRange}
            boxSize={6}
            color="green"
            bg="white.500"
            rounded="full"
            p={1}
          />
          <p>
            No cost EMI ₹1,667/month{" "}
            <span style={{ color: "gray" }}>Standard EMI also available </span>
            <span style={{ color: "#2874f0" }}>View Plans</span>{" "}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <Icon
            as={AiFillTag}
            boxSize={6}
            color="green"
            bg="white.500"
            rounded="full"
            p={1}
          />
          <p>
            Partner Offer{" "}
            <span style={{ color: "gray" }}>
              Purchase now & get 1 surprise cashback coupon in Future{" "}
            </span>
            <span style={{ color: "#2874f0" }}>Know More</span>{" "}
          </p>
        </div>

        {/* <div>
          <h2>Color</h2>
        </div> */}

        <div>
          <h2>Highlights</h2>
          <ul style={{ marginLeft: "50px", color: "gray" }}>
            {data?.Highlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

                {/* Seller */}
        <div>
          <h2 style={{ display: "flex" }}>
            Seller{" "}
            <span style={{ color: "#2874f0", marginLeft: "3px" }}>
              MASAI ELECTRONIX RETAIL
            </span>{" "}
            <div
              style={{
                width: "50px",
                height: "25px",
                backgroundColor: "#2874f0",
                marginLeft: "10px",
                borderRadius: "5px",
                paddingLeft: "5px",
              }}
            >
              4.5 <StarIcon marginBottom="5px" color="white"></StarIcon>{" "}
            </div>{" "}
          </h2>
          <ul style={{ marginLeft: "50px", color: "gray" }}>
            <li>7 Days Service Center Replacement/Repair</li>
          </ul>
        </div>

              {/* Product Description */}

        <div>
          <h2>Product Description</h2>
          <ul style={{ marginLeft: "50px", color: "gray" }}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              voluptatibus ducimus possimus esse recusandae necessitatibus
              molestias fuga numquam pariatur quisquam! Voluptate asperiores
              perferendis quo itaque porro qui rem doloremque assumenda.
              {showFullDescription && (
                <span>
                  Fugit animi molestiae cumque repellat consequuntur beatae ut
                  sit iste assumenda magnam harum quo iure recusandae blanditiis
                  inventore sequi, quos reiciendis praesentium eos eaque odio
                  ratione, labore illo! Saepe, quam. Unde sit officiis,
                  voluptatibus facilis modi nam assumenda soluta reiciendis quae
                  ut deserunt non perferendis neque aliquid dicta facere ratione
                  expedita tenetur. Unde voluptatum esse reiciendis, aspernatur
                  quibusdam animi natus.
                </span>
              )}
            </li>
            <button
              style={{
                backgroundColor: "#2874f0",
                borderRadius: "5px",
                padding: "2px",
                fontWeight: "600",
                color: "white",
                fontSize: "10px",
              }}
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Show less" : "Read more"}
            </button>
          </ul>
        </div>

            {/* Rating */}

        <div>
          <h2>Ratings & Reviews</h2>
          <div style={{ marginLeft: "50px" }}>
            <ul style={{ color: "gray" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "25px",
                  color: "black",
                }}
              >
                <h2>{averageRating}</h2> <StarIcon />
                <p
                  style={{ color: "gray", fontWeight: "600", fontSize: "15px" }}
                >
                  {data?.review?.length} Reviews
                </p>
                <button className="rating-button" 
                 onClick={() => setIsRatingModuleOpen(true)}
                >Rate Product</button>
              </div>
            
              <RatingModule
                    isOpen={isRatingModuleOpen}
                    onClose={() => setIsRatingModuleOpen(false)}
                    name={data?.name}
                    reviews={data?.review?.length}
                    rating={averageRating}
                    productName={data?.name}
                    id={id}
                  />
              {data?.review?.map((reviews, index) => (
                <div key={index}>
                  <li className="rating" key={index}>
                    {reviews.name}
                    {"  "}{" "}
                    <span
                      style={{
                        width: "40px",
                        height: "20px",
                        color: "white",
                        backgroundColor: "#2874f0",
                        marginLeft: "10px",
                        fontSize: "14px",
                        borderRadius: "5px",
                        padding: "2px",
                      }}>
                      {reviews.rating}{" "}
                      <StarIcon
                        marginBottom="5px"
                        width="10px"
                        color="white"
                      ></StarIcon>{" "}
                    </span>{" "}
                  </li>
                  <div>
                    <p>{reviews.text}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default SingleProducts;

const DIV = styled.div`
  width: 80%;
  margin: auto;
  /* position: relative; */
  padding: 10px;
  display: flex;
  gap: 25px;
  text-align: start;
  h5 {
    font-weight: bold;
  }
  h3 {
    font-weight: bold;
    font-size: 30px;
    margin-top: 4px;
  }
  h2 {
    font-weight: 600;
  }
  .sticky-content {
    width: 40%;
    height: 450px;
    position: sticky;
    padding: 20px;
    top: 80px;
 
    /* background-color: lightgray; */
  }
  .sticky-content > img {
    margin: auto;
    width: 70%;
    /* height: 70%; */
  }

  .scrollable-content {
    width: 60%;
    overflow: auto;
    padding: 20px;
  }
  .rating{
    color: black;
    font-weight: 600;
  }
  .rating-button{
    width: 95px;
    height: 30px;
    margin-left: 30px;
    font-size: 12px;
    font-weight: 550;
    background-color: #eee9e9;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .add-button{
        padding: 5px;
        border: 1px solid gray;
        margin: auto;
        margin-left: 75px;
        margin-top: 5px;
        font-weight: bold;
        background-color:#c36319 ;
        color: white;
    }
    .add-button:hover{
        color:#c36319 ;
        border: 1px solid gray;
        background-color: white;
    }
    
`;
