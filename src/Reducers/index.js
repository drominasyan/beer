import { combineReducers } from 'redux'
import {BeerReducer,favoritReducer} from './BeerReducer'

export const rootReducer = combineReducers({
    beers:BeerReducer,
    favorits:favoritReducer
})