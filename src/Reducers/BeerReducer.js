import { RECEIVED_BEER_DATA, UPDATE_FAVLSIT_BY_SAGA, POPUP_BEER } from "../Actions/types";


export const BeerReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVED_BEER_DATA:
            return action.payload.data
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

export const singleBeerData = (state = { opened: false }, action) => {
    switch (action.type) {
        case POPUP_BEER:
            return action.payload
        default:
            return state;
    }
}