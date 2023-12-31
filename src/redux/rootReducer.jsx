import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";

const rootReducer = combineReducers({
    books : booksReducer,
});

export default rootReducer;