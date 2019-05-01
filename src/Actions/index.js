import { FETCH_BEERS_SAGA, UPDATE_FAVLSIT, POPUP_BEER} from "./types";
export const fetchBeers = (url) => ({ type: FETCH_BEERS_SAGA, payload: url })

export const showPopupMethod = (data) => {
  return {
    type: POPUP_BEER,
    payload: data
  }
}

export const updateFavoriteList = (data) => ({ type: UPDATE_FAVLSIT, payload: data })