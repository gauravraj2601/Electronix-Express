import { PRODUCT_ADDED } from "./actionType";

const initialState = {
    products: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_ADDED:
        return {
          ...state,
          products: [...state.products, action.payload]
        };
      // Handle other actions if needed
      default:
        return state;
    }
  };
  
  export default productReducer;
  