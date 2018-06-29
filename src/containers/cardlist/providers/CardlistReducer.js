import {
    combineReducers,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import type from "./ActionType";

const initialState = {
    value: "",
    list: []
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_MUSIC_LIST:
            return {
                ...state,
                list: action.valueList
            };
        case type.UPDATE_MUSIC_VALUE:
            return {
                ...state,
                value: action.newValue
            }
        default:
            return state;
    }
};

export const Reducers = combineReducers({
    state
}, applyMiddleware(thunk));