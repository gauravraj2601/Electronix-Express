import axios from "axios";
import { GET_FAILURE, GET_REQ, GET_SUCCESS, url } from "./actionTypes";



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




// export const GET_REQ= "GET_REQ";
// export const GET_SUCCESS= "GET_SUCCESS";
// export const GET_FAILURE= "GET_FAILURE";