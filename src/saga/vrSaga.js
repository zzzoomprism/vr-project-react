import {call} from "redux-saga/effects";
import { put, takeLatest } from "redux-saga/effects";

export const myDelay = (ms) => new Promise((res)=>setTimeout(res, ms));

export function* changeVrPage(action){
    try{
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: action.cursor});
        yield call(myDelay, 2500);
        if(action.cursor)
        yield put({type: 'CHANGE_VR_PAGE', page: action.page});
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: false});
    }catch (e) {
        console.log(e);
    }
}

export function* watchChangeVrPage(){
    yield takeLatest("CHANGE_VR_PAGE_ASYNC", changeVrPage);
}
