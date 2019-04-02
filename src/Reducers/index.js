import { combineReducers } from 'redux'
import {BeerReducer,favoritReducer,singleBeerData} from './BeerReducer'

export const rootReducer = combineReducers({
    beers:BeerReducer,
    favorits:favoritReducer,
    showPopup:singleBeerData,
})