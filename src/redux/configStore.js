import { applyMiddleware, combineReducers, createStore } from "redux";
import { users, auth } from "./features/users";
import { message } from "./features/message";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    users,
    auth,
    message,
  }),
  composeWithDevTools(applyMiddleware())
);
