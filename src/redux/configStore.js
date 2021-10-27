import { applyMiddleware, combineReducers, createStore } from "redux";
import { users } from "./features/users";
import { message } from "./features/message";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    users,
    message,
  }),
  composeWithDevTools(applyMiddleware())
);
