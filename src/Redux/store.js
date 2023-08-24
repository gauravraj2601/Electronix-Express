
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { productReducer } from "./GetProducts/productReducer";
import { reducer as PostReducer} from "./Crud/reducer";
import thunk from "redux-thunk"
import { authReducer } from "./Authentication/authReducer"
const rootReducer=combineReducers({
    authReducer,
    productReducer,
    PostReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))