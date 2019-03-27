import { createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// import react from 'react'

const initialState = {
  messages: []
};

const GOT_MESSAGES_FROM_SERVER = "GOT_MESSAGES_FROM_SERVER";

//payload action
export const gotMessagesFromServer = arr => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages: arr
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
