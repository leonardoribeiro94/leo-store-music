const initialState = {
    value: "",
    list: []
};

const cardlist = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_MUSIC_LIST":
            return {
                ...state,
                list: action.value.results
            };
        case "UPDATE_MUSIC_VALUE":
            return {
                ...state,
                value: action.newValue
            }
        default:
            return state;
    }
};

export default cardlist;