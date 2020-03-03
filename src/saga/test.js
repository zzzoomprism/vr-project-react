
import { delay , call} from "redux-saga/effects";
import { take,takeEvery, put, takeLatest } from "redux-saga/effects";

function* updateCartAsync(value){
    yield put({type: 'UPDATE_CART_COUNT_ASYNC', item: value.item, done: value.done});
}

export function* fetchData(action) {

    try {
        yield put({type: "FETCH_SUCCEEDED", value: action.item})
    } catch (error) {
        yield put({type: "FETCH_FAILED", error})
    }
}

export function* watch() {
    yield takeLatest('FETCH_REQUESTED', fetchData)
}
// export function* watch(){
//
//     yield takeLatest('UPDATE_CART_COUNT', updateCartAsync)
// }