import { FETCH_BEERS, UPDATE_FAVLSIT,POPUP_BEER } from "./types";
import { BeersHostRequest } from '../Network'

export const fetchBeers = (url) => dispatch => {
  BeersHostRequest(url).then(res => {
    // console.log("res", res)
    dispatch({
      type: FETCH_BEERS,
      payload: res
    })
  })
}

export const showPopuop = (data) => {
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
