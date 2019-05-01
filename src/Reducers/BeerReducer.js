import {
    RECEIVED_BEER_DATA,
    UPDATE_FAVLSIT_BY_SAGA,
    POPUP_BEER,
    FETCH_BEERS_START,
    FETCH_BEERS_FEILD,
    FETCH_BEERS_SUCCESS
} from "../Actions/types";


export const BeerReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_BEERS_START:
            console.log(FETCH_BEERS_START, state)
            return {
                ...state,
                loading: true
            }
        case FETCH_BEERS_SUCCESS:
            console.log("action.payload.data", action.payload.data)
            return {
                ...state,
                loading: false,
                beers: action.payload.data,
            }
        case FETCH_BEERS_FEILD:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export const favoritReducer = (state = JSON.parse(localStorage.getItem('favorites')) === null ? [] : [...JSON.parse(localStorage.getItem('favorites'))], action) => {
    switch (action.type) {
        case UPDATE_FAVLSIT_BY_SAGA:
            console.log(action.payload)
            return action.payload
        default:
            return state;
    }
}

export const singleBeerData = (state = {
    opened: false
}, action) => {
    switch (action.type) {
        case POPUP_BEER:
            return action.payload
        default:
            return state;
    }
}