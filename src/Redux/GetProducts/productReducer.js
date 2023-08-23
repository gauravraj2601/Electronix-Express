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
            return {...state, isLoadin:true, isError:false}
        case GET_FAILURE:
            return {...state, isLoadin:false, isError:true, errorMessage:payload}
        case GET_SUCCESS:
            return {...state, isLoadin:false, products:payload, isError:false}
        default:
            return state;
    }
}




// export const GET_REQ= "GET_REQ";
// export const GET_SUCCESS= "GET_SUCCESS";
// export const GET_FAILURE= "GET_FAILURE";