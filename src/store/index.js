import { createStore } from "redux";
import { Reducers } from "../containers/cardlist/providers/CardlistReducer";

export const Store = createStore(Reducers);