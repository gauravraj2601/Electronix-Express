import axios from "axios";
import { ADD_TO_CART, ADD_TO_WISHLIST, GET_FAILURE, GET_REQ, GET_SUCCESS, ORDER_SUCCESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, url } from "./actionTypes";



export const getProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:GET_REQ});
    console.log(paramObj);
    axios
    .get(`${url}`,paramObj)
    .then((res)=>{
        dispatch({type:GET_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_FAILURE,payload:err.message})
    })
}
    // Add to CART
export const addToCart=(payload)=>(dispatch)=>{
    dispatch({type:ADD_TO_CART,payload})
}
export const removeFromCart = (productId) =>(dispatch)=> (
    dispatch({type: REMOVE_FROM_CART,
        payload: productId})
  )

//   Add to Wishlist

export const addToWishlist=(payload)=>(dispatch)=>{
    dispatch({type:ADD_TO_WISHLIST, payload})
}

export const removeFromWishlist=(productId)=>(dispatch)=>{
        dispatch({type:REMOVE_FROM_WISHLIST, payload:productId})
}

export const orderSuccess=()=>(dispatch)=>{
    dispatch({type:ORDER_SUCCESS})
}
// export const GET_REQ= "GET_REQ";
// export const GET_SUCCESS= "GET_SUCCESS";
// export const GET_FAILURE= "GET_FAILURE";