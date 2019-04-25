import { FETCH_BEERS_SAGA, UPDATE_FAVLSIT, POPUP_BEER, RECEIVED_BEER_DATA, FETCH_BEERS_SUCCESS, FETCH_BEERS_FEILD, } from "./types";


export const fetchBeers = (url) => ({ type: FETCH_BEERS_SAGA, payload: url })

export const receivedBeerData = (data) => ({ type: RECEIVED_BEER_DATA, payload: data })



export const showPopupMethod = (data) => {
  return {
    type: POPUP_BEER,
    payload: data
  }
}

export const updateFavoriteList = (data) => dispach => {
  const favorite = JSON.parse(localStorage.getItem('favorites')) || []
  let equal = true
  if (favorite.length) {
    favorite.forEach((item, index) => {
      if (item.id === data.id) {
        favorite.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(favorite))
        equal = false
        dispach({
          type: UPDATE_FAVLSIT,
          payload: favorite,
        })
      }
    })
    if (equal) {
      favorite.push(data)
      localStorage.setItem('favorites', JSON.stringify(favorite))
      dispach({
        type: UPDATE_FAVLSIT,
        payload: favorite,
      })
    }
  } else {
    favorite.push(data)
    localStorage.setItem('favorites', JSON.stringify(favorite))
    dispach({
      type: UPDATE_FAVLSIT,
      payload: favorite,
    })
  }
}
