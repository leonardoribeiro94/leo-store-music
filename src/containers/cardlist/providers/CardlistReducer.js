import { combineReducers } from "redux"
import type from "./ActionType";

const initialState = {
    value: "Asking"
};

const state = (state = initialState, action) => {
    console.log(state.value, action.type, action.newValue)

    switch (action.type) {
        case type.GET_MUSIC_LIST:
            return {
                ...state,
                value: action.newValue
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

export const Reducers = combineReducers({state});
