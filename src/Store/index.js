import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from "../Reducers/index.js"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddlware from "redux-saga"
import {rootSaga} from "../Saga/index"
const initialState = {
    data:{
        beers:[],
        loading:false,
        error:false
    },
    favorits:[]
}


const sagaMiddlware = createSagaMiddlware()

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddlware))
);
sagaMiddlware.run(rootSaga)