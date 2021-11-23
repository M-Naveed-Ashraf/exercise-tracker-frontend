import { combineReducers } from "redux";
import  LoginReducer  from "./login"
import AddTaskReducer from "./addTaskReducer"
import TodoReducer from "./todo";
import RetrieveData from "./RetrieveData";
import reducer from "./test";

const rootReducer = combineReducers({
    LoginReducer,
    AddTaskReducer,
    TodoReducer,
    RetrieveData,
    reducer
})

export default rootReducer;