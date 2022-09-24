import { combineReducers } from "redux";
import devsReducer from "./Devs/devsReducer";
import { singleDevReducer } from "./Devs/singleDevReducer";




// create rootReducers
const rootReducers = combineReducers({

    devs : devsReducer,
    signleDev : singleDevReducer 

})


export default rootReducers;