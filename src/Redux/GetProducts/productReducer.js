import { ADD_TO_CART, GET_FAILURE, GET_REQ, GET_SUCCESS, REMOVE_FROM_CART } from "./actionTypes"


const initialState={
    products:[],
    isLoading:false,
    isError:false,
    errorMessage:"",
    cart:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_REQ:
            return {...state, isLoading:true, isError:false}
        case GET_FAILURE:
            return {...state, isLoading:false, isError:true, errorMessage:payload}
        case GET_SUCCESS:
            return {...state, isLoading:false, products:payload, isError:false}
        case ADD_TO_CART:
            return {...state,cart: [...state.cart,payload]};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item=>item.id !==payload)}
        default:
            return state;
    }
}




// export const GET_REQ= "GET_REQ";
// export const GET_SUCCESS= "GET_SUCCESS";
// export const GET_FAILURE= "GET_FAILURE";