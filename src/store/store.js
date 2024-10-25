import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducers";

const myStore = createStore(reducer, applyMiddleware(thunk));

export default myStore;