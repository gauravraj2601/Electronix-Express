import { GET_FAILURE, GET_REQ, GET_SUCCESS } from "./actionTypes"


const initialState={
    products:[],
    isLoading:false,
    isError:false,
    errorMessage:""
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_REQ:
            return {...state, isLoading:true, isError:false}
        case GET_FAILURE:
            return {...state, isLoading:false, isError:true, errorMessage:payload}
        case GET_SUCCESS:
            return {...state, isLoading:false, products:payload, isError:false}
        default:
            return state;
    }
}




// export const GET_REQ= "GET_REQ";
// export const GET_SUCCESS= "GET_SUCCESS";
// export const GET_FAILURE= "GET_FAILURE";