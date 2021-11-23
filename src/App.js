import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./components/login-signup.css";
import "./components/addNewTask.css"
import Signup from "./components/signup";
import AddNewTask from "./components/AddNewTask";
import Main from "./components/main";
import TODo from "./components/ToDo";
import Test from "./components/test";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/main" component={Main}></Route>
        <Route exact path="/addNewTask" component={AddNewTask}></Route>
        <Route exact path="/tasks" component={TODo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
