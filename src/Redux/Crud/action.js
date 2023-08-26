import axios from 'axios';
import { PRODUCT_ADDED, REVIEW_ADD } from './actionType';
import { GET_FAILURE, GET_REQ } from '../GetProducts/actionTypes';

export const addProduct = (productData) => async (dispatch) => {
    dispatch({type:GET_REQ})
  try {
    const response = await axios.post("https://electronix-express-api.onrender.com/products", productData);
    dispatch({ type: PRODUCT_ADDED, payload: response.data });
    alert("succesfull")
  } catch (error) {
    dispatch({type:GET_FAILURE})
    console.error('Error adding product:', error);
    // Dispatch an error action if needed
  }
}  

export const addReview=(id, review)=>(dispatch)=>{
  dispatch({type:GET_REQ})

  return (
    axios
    .post(`https://electronix-express-api.onrender.com/products/${id}`,review)
    .then((res)=>{
      dispatch({type:REVIEW_ADD,payload:res.data})
    })
    .catch((err)=>dispatch({type:GET_FAILURE}))
  )
}