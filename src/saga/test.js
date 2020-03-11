
import { delay , call} from "redux-saga/effects";
import { take,takeEvery, put, takeLatest } from "redux-saga/effects";


export function* fetchData(action) {
    try {
        yield put ({type: "CART_ADD_ONLOAD"});
        yield delay(1000);
        yield put({type: "UPDATE_CART_COUNT", value: action.item})
    } catch (error) {
        yield put({type: "FETCH_FAILED", error})
    }
}

export function* watch() {
    yield takeLatest('UPDATE_CART_COUNT_CHECK', fetchData)
}
// export function* watch(){
//
//     yield takeLatest('UPDATE_CART_COUNT', updateCartAsync)
// }