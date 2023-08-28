import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../Redux/Crud/action";

const RatingModule = ({id, isOpen,productName ,onClose, name, reviews, rating }) => {
    const dispatch= useDispatch();
    const products= useSelector(store=>store.productReducer.products)
    const [reviewData, setReviewData] = useState({
        name: "",
        text: "",
        rating: 0,
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setReviewData((prevData) => ({
          ...prevData,
          [name]: name==="rating"? +value:value,
        }));
      };
      const handleSubmit = () => {
        // Call your postData function here with reviewData
        // For example: postData(reviewData);
        dispatch(addReview(id,reviewData)).then(()=>{
            alert("success")
        })
        console.log("Posting review data:", reviewData);
        onClose(); // Close the modal after submitting
      };
      useEffect(()=>{
        const revData= products.find((el)=>el.id=== +id);
        setReviewData(revData.review)
      },[])
      // console.log(products)
      // console.log("d",reviewData)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ratings & Reviews
        <div style={{ display: "flex", alignItems: "center",color:"gray", gap: "10px" }}>
            <h3 style={{color:"black"}}>{productName}</h3>
              <h2>{rating}</h2> <StarIcon />
              <p style={{ fontWeight: "600", fontSize: "15px" }}>
                {reviews} Reviews
              </p>
            </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <div style={{ display: "grid" }}>
            <input
              name="name"
              value={reviewData.name}
              onChange={handleInputChange}
              style={{ width: "300px", height: "30px", border: "1px solid gray", padding: "8px" }}
              type="text"
              placeholder="Name"
            />
            <textarea
              name="text"
              value={reviewData.text}
              onChange={handleInputChange}
              style={{ width: "300px", marginTop: "5px", height: "80px", border: "1px solid gray", padding: "8px" }}
              placeholder="Review"
            ></textarea>
            <select
              name="rating"
              value={reviewData.rating}
              onChange={handleInputChange}
              style={{ border: "1px solid gray", width: "80px", marginTop: "5px" }}
            >
              <option value="">Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
         
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RatingModule;
