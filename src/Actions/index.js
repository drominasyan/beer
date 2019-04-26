import { FETCH_BEERS_SAGA, UPDATE_FAVLSIT, POPUP_BEER, RECEIVED_BEER_DATA} from "./types";
export const fetchBeers = (url) => ({ type: FETCH_BEERS_SAGA, payload: url })

export const receivedBeerData = (data) => ({ type: RECEIVED_BEER_DATA, payload: data })

export const showPopupMethod = (data) => {
  return {
    type: POPUP_BEER,
    payload: data
  }
}

export const updateFavoriteList = (data) => ({ type: UPDATE_FAVLSIT, payload: data })