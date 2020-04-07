import {fork, all } from "redux-saga/effects";
import {watch, watchCursorFunc, watchDeleteFilter} from "./test";
import {watchChangeVrPage} from "./vrSaga";

export default function* rootSaga() {
    yield all([
        fork(watch),
        fork(watchDeleteFilter),
        fork(watchCursorFunc),
        fork(watchChangeVrPage)
    ]);
};