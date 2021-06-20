import { createStore } from "redux";
import rootReducer from "./rootreducer";
import {devToolsEnhancer} from "redux-devtools-extension"

export function configureStore(){
    return createStore(rootReducer, devToolsEnhancer())
}