import { put, call, takeLatest, takeEvery } from "redux-saga/effects"
import { BeersHostRequest } from "../Network/index"
import { receivedBeerData } from "../Actions/index"
import { FETCH_BEERS_SAGA, UPDATE_FAVLSIT, UPDATE_FAVLSIT_BY_SAGA } from "../Actions/types"

function* getBeersData(action) {
    console.log()
    try {
        // Do the call to Api
        // Call also can return a function
        const data = yield call(() => BeersHostRequest(action.payload));
        yield put(receivedBeerData(data));
    } catch (e) {
        console.log(e)
    }
}

function* updateFavList(action) {
    const favorite = yield JSON.parse(localStorage.getItem('favorites')) || []
    const data = yield action.payload
    yield (() => {
        let equal = true
        if (favorite.length) {
            favorite.forEach((item, index) => {
                if (item.id === data.id) {
                    favorite.splice(index, 1)
                    localStorage.setItem('favorites', JSON.stringify(favorite))
                    console.log("remove", favorite);
                    equal = false
                }
            })
            if (equal) {
                console.log("add", favorite);
                favorite.push(data)
                localStorage.setItem('favorites', JSON.stringify(favorite))
            }
        } else {
            console.log("add-first", favorite);
            favorite.push(data)
            localStorage.setItem('favorites', JSON.stringify(favorite))
        }
    })()
    yield put({ type: UPDATE_FAVLSIT_BY_SAGA, payload: favorite });
}


export const rootSaga = function* () {
    yield takeLatest(FETCH_BEERS_SAGA, getBeersData)
    yield takeEvery(UPDATE_FAVLSIT, updateFavList)
};