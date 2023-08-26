import axios from "axios";
import { ADD_TO_CART, GET_FAILURE, GET_REQ, GET_SUCCESS, REMOVE_FROM_CART, url } from "./actionTypes";



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

export const addToCart=(payload)=>(dispatch)=>{
    dispatch({type:ADD_TO_CART,payload})
}

export const removeFromCart = (productId) =>(dispatch)=> (
    dispatch({type: REMOVE_FROM_CART,
        payload: productId})
  )


// export const GET_REQ= "GET_REQ";
// export const GET_SUCCESS= "GET_SUCCESS";
// export const GET_FAILURE= "GET_FAILURE";