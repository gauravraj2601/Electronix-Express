import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Icon, StarIcon } from "@chakra-ui/icons";
import { AiFillTag } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

import logo from "../Images/logo.png";
const SingleProducts = () => {
  const { id, averageRating } = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const [data, setData] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const product = products.find((el) => el.id === +id);
    console.log(product);
    setData(product);
  }, []);

  return (
    <DIV>
      <div className="sticky-content">
        <img src={data?.image} alt="product-img" />
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
          <img
            style={{
              width: "20px",
              height: "20px",
              marginTop: "3px",
              marginLeft: "-5px",
            }}
            src={logo}
            alt="logo"
          />
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

        <div>
          <h2>Color</h2>
        </div>

        <div>
          <h2>Highlights</h2>
          <ul style={{ marginLeft: "50px", color: "gray" }}>
            {data?.Highlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
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
        <div>
          <h2>Highlights</h2>
          <ul style={{ marginLeft: "50px", color: "gray" }}>
            {data?.Highlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
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
              </div>
              {data?.review?.map((reviews, index) => (
                <>
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
                      }}
                    >
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
                </>
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
    height: 400px;
    position: sticky;
    padding: 20px;
    top: 0;
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
`;
