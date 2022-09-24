import { createStore } from "redux";
import rootReducers from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";



// redux store
const store = createStore(rootReducers, composeWithDevTools());


export default store;