import axios from 'axios';
import { PRODUCT_ADDED } from './actionType';
import { GET_FAILURE, GET_REQ } from '../GetProducts/actionTypes';

export const addProduct = (productData) => async (dispatch) => {
    dispatch({type:GET_REQ})
  try {
    const response = await axios.post("https://electronix-express-api.onrender.com/products", productData);
    dispatch({ type: PRODUCT_ADDED, payload: response.data });
  } catch (error) {
    dispatch({type:GET_FAILURE})
    console.error('Error adding product:', error);
    // Dispatch an error action if needed
  }
}  