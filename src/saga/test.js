import { delay , call} from "redux-saga/effects";
import { take,takeEvery, put, takeLatest } from "redux-saga/effects";


export const myDelay = (ms) => new Promise(res => setTimeout(res, ms));

export function* fetchData(action) {
    try {
        yield put ({type: "CART_ADD_ONLOAD"});
        yield delay(1000);
        yield put({type: "UPDATE_CART_COUNT", value: action.item});
        yield put({type: "SHOW_ALERT"});
        yield call(myDelay, 2500);
        yield put({type: "HIDE_ALERT"});
    } catch (error) {
        yield put({type: "FETCH_FAILED", error})
    }
}

export function* watch() {
    yield takeLatest('UPDATE_CART_COUNT_CHECK', fetchData)
}

export function* deleteFilter(action){
    try{
        yield put({type: "DELETE_FILTER", value: action.value});
        yield put({type: "SET_FILTER"});
    } catch (e) {
        console.error(e);
    }
}

export function* watchDeleteFilter(){
    yield takeLatest('DELETE_FILTER_STOCK', deleteFilter);
}