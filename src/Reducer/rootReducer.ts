import { combineReducers } from "redux";
import tagReducer from "./tagReducer";
import userReducer from "./userReducer"
import movieFetchReducer from "./movieFetchReducer"

export default combineReducers({tagReducer, userReducer, movieFetchReducer})