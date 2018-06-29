import type from "./ActionType";
import { takeEvery, put } from "redux-saga/effects";
import ItunesService from "../../../services/ItunesService";

const _itunesService = new ItunesService();

function* getAsyncMusicList(data) {
    yield put({
        type: type.GET_MUSIC_LIST,
        payload: {
            data: _itunesService.getProductList(data)
        }
    });
}

export default function* root() {
    yield takeEvery(type.GET_ASYNC_MUSIC_LIST, getAsyncMusicList)
}