import { combineReducers } from "redux";
import  LoginReducer  from "./login"
import AddTaskReducer from "./addTaskReducer"
import TodoReducer from "./todo";
import RetrieveData from "./RetrieveData";


const rootReducer = combineReducers({
    LoginReducer,
    AddTaskReducer,
    TodoReducer,
    RetrieveData
})

export default rootReducer;