
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { productReducer } from "./GetProducts/productReducer";
import thunk from "redux-thunk"
import { authReducer } from "./Authentication/authReducer"
const rootReducer=combineReducers({
    authReducer,
    productReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))