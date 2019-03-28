import { combineReducers } from 'redux'
import {BeerReducer} from './BeerReducer'

export const rootReducer = combineReducers({
    data:BeerReducer
})