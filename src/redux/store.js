import mainReducer from "./main-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    mainPage: mainReducer
});

let store = createStore(reducers);

export default store;