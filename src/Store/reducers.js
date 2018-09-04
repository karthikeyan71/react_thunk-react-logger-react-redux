
import { combineReducers } from 'redux';

const userReducer = (state = {state:0,users:[]} , action) =>{

  // console.log("Dispatching Reducers");
  // console.log("Dispatached Reducer : " + action.type );

  // console.log(action);

  switch(action.type)
  {
    case "INCREMENT":
      state = state+1;
      break;

    case "DECREMENT":
      state = state-1;
      break;

    default:
      // console.log("None of the dispatch action has been executed");

  }

  // console.log("Modified Store data : ");
  // console.log(state);

  return state;

}

const postReducer = (state={}, action) =>{

  // console.log("Dispatched action : " + action.type );

  switch (action.type) {

    case "SOMETHING":
      // console.log("Got inside the something case of postReducers");
      break;

    case "FAILED":
      throw new Error("Oh my God");

    default:
      // console.log("Got inside the default block");

  }

  return state;

}

const bigReducer = combineReducers({

  user: userReducer,
  post: postReducer

});

export default bigReducer;
