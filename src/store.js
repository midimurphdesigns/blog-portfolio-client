import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sideDrawerReducer from "./reducers/side-drawer-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore((sideDrawerReducer),
  composeWithDevTools(),
  applyMiddleware(thunk)
);

export default store;
