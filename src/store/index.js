import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import cardlist from "../containers/cardlist/CardlistReducer";
import cardListSaga from "../containers/cardlist/CardListSaga";
const sagaMiddleware = new createSagaMiddleware();

const Store = createStore(
    combineReducers({
        cardlist
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(cardListSaga);

export default Store;