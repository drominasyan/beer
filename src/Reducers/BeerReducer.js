import { FETCH_BEERS,UPDATE_FAVLSIT } from "../Actions/types";
const initialState = {
    beers:[],
    favorits:JSON.parse(localStorage.getItem('favorites')) || []
}

export const  BeerReducer = (state = initialState, action)=>{
    switch (action.type){
        case FETCH_BEERS:
        return {
            ...state,
            beers:action.payload.data
        }
        case UPDATE_FAVLSIT:
        console.log(action.payload)
        return {
            ...state,
            favorits:action.payload
        }
        default:
        return state;
    }
}