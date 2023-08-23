import axios from 'axios';
import { PRODUCT_ADDED } from './actionType';

export const addProduct = (productData) => async (dispatch) => {

  try {
    const response = await axios.post('', productData);
    dispatch({ type: PRODUCT_ADDED, payload: response.data });
  } catch (error) {
    console.error('Error adding product:', error);
    // Dispatch an error action if needed
  }
}