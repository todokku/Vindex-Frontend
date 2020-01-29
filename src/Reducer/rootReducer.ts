import { combineReducers } from "redux";
import tagReducer from "./tagReducer";
import userReducer from "./userReducer"

export default combineReducers({tagReducer, userReducer})