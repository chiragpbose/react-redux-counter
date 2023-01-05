import { rootReducer } from "./root-reducer";
import { reducer } from "./reducer";
import { legacy_createStore as createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

export const store = createStore(
	rootReducer,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);
