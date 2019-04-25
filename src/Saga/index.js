import { put, call, takeLatest } from "redux-saga/effects"
import { BeersHostRequest } from "../Network/index"
import { receivedBeerData } from "../Actions/index"
import { FETCH_BEERS_SAGA } from "../Actions/types"

function* getBeersData(action) {
    try {
        // do the call
        const data = yield call(BeersHostRequest); // Call can also return a function
        yield put(receivedBeerData(data));
    } catch (e) {
        console.log(e)
    }
}

export default function* beersSaga() {
    //Call can also return a function
    yield takeLatest(FETCH_BEERS_SAGA, getBeersData)
}


