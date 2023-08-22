import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./actionTypes";


const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: "",
    errorMessage: "",
  };
  

  
export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_REQ:
        return { ...state, isLoading: true, isError: false };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isAuth: true,
          token: payload,
          errorMessage: "",
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: payload,
        };
      default:
        return state;
    }
  };
  