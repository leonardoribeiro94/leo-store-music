import ItunesService from "../../../services/ItunesService";
import type from "./ActionType";
const _itunesService = new ItunesService();

export const getMusicList = data => ({
    type: type.GET_MUSIC_LIST,
    valueList: _itunesService.getProductList(data) 
});

export const updateValueField = data => ({
    type: type.UPDATE_MUSIC_VALUE,
    newValue: data
});