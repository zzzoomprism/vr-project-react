
import { delay } from "redux-saga/effects";
import { takeEvery, put, takeLatest } from "redux-saga/effects";

function* updateCartAsync(value){
    yield delay(200);
    yield put({type: 'UPDATE_CART_COUNT_ASYNC', item: value.item});
}

export function* watch(){
    yield takeLatest('UPDATE_CART_COUNT', updateCartAsync)
}