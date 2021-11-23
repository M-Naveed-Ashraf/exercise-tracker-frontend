import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../actions/userTypes'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
          success: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: actions.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: actions.payload
        }
      default: return state
    }
  }
  
  export default reducer