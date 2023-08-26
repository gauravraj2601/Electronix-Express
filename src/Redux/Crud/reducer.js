import { PRODUCT_ADDED, REVIEW_ADD } from "./actionType";

const initialState = {
    products: []
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_ADDED:
        return {
          ...state,
          products: [...state.products, +action.payload]
        };
      // Handle other actions if needed
      case REVIEW_ADD:
        return {...state,products:[...state.reviews,action.payload]}
      default:
        return state;
    }
  };
  
  
  