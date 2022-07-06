import { combineReducers } from "redux";
import auth from "./authReducer"
import phone from "./phoneReducer"

const combineReducer = combineReducers({
    auth: auth,
    phone: phone,
})

export default combineReducer;