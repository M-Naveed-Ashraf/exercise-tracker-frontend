import { combineReducers } from "redux";
import  LoginReducer  from "./login"
import AddTaskReducer from "./addTaskReducer"
import TodoReducer from "./todo";


const rootReducer = combineReducers({
    LoginReducer,
    AddTaskReducer,
    TodoReducer
})

export default rootReducer;