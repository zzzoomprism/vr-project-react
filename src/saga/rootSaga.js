import {fork, all } from "redux-saga/effects";
import {watch, watchDeleteFilter} from "./test";

export default function* rootSaga() {
    yield all([
        fork(watch),
        fork(watchDeleteFilter)
    ]);
};