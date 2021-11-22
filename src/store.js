import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers/combineAllReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));


// ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default Store;