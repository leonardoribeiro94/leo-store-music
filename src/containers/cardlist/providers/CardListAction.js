import type from "./ActionType";

export const getMusicList = data => ({
    type: type.GET_ASYNC_MUSIC_LIST,
    valueList: data
});

export const updateValueField = data => ({
    type: type.UPDATE_MUSIC_VALUE,
    newValue: data
});