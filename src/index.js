import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';


import Main from './main';
import bigReducer from './Store/reducers';

const initial = {user:10, post:{}};

const middle = (store) => (next) => (action) => {
  console.log("Action fired", action);

  if(action.type === "INCREMENT")
  {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{

      console.log(result.data);
      setTimeout(function()
      {
        console.log("Failed got called after this");
        // action = {type:'FAILED'};
        next(action);
      },2000);
    })

  }
}

const error = (store) => (next) => (action) => {
  console.log("Error Action has been triggered");
  try
  {
    next(action);
  }
  catch(e){
    console.log("Error Occurred : AAAAHHH!!!!!");
  }
}

const middler = applyMiddleware(middle, error);

const thunker = applyMiddleware(thunkMiddleware, logger);

const store = createStore(bigReducer, initial, thunker);

console.log(store.getState());

store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});
// store.dispatch({type:"DECREMENT"});
// store.dispatch({type:"DECREMENT"});


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
  <Main />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
