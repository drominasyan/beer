import { createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import { rootReducer } from "../Reducers/index.js"
import {composeWithDevTools} from "redux-devtools-extension"

const initialState = {
    beers:[],
    favorits:JSON.parse(localStorage.getItem('favorites')) || []
}

const middlware = [thunk]

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlware))
);