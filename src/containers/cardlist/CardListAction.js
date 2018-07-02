export const getMusicList = data => ({
    type: "GET_ASYNC_MUSIC_LIST",
    valueList: data
});

export const updateValueField = data => ({
    type: "UPDATE_MUSIC_VALUE",
    newValue: data
});