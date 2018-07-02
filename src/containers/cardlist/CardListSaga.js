import { takeEvery, put, call } from "redux-saga/effects";
import ItunesService from "../../services/ItunesService";
const _itunesService = new ItunesService();

function* getAsyncMusicList(data) {
    const request = yield call(_itunesService.getProductList, data.valueList)
    
    yield put({
        type: "GET_MUSIC_LIST",
        value: request.data
    });
}

export default function* root() {
    yield takeEvery("GET_ASYNC_MUSIC_LIST", getAsyncMusicList);
}