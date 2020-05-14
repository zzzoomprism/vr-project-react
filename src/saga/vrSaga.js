import {call, delay} from "redux-saga/effects";
import { put, takeLatest } from "redux-saga/effects";

export const myDelay = (ms) => new Promise((res)=>setTimeout(res, ms));

export function* changeVrPage(action){
    try{
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: action.cursor});
        yield call(myDelay, 2500);
        if(action.cursor)
        yield put({type: action.action, page: action.page});
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: false});
    }catch (e) {
        console.log(e);
    }
}

export function* watchChangeVrPage(){
    yield takeLatest("CHANGE_VR_PAGE_ASYNC", changeVrPage);
}


export function* checkCursor(action){
    try{
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: action.cursor});
        yield call(myDelay, 2500);
        if(action.cursor)
        yield put({type: "UPDATE_CART_COUNT", value: action.data});
        yield call(myDelay, 2500);
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: false});
    }catch (e) {
        console.log(e);
    }
}

export function* watchcheckCursor(){
    yield takeLatest("CHECK_CURSOR_WATCH", checkCursor);
}

export function* checkMouseEnter({modelId, cursor}){
    try{
        yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: cursor});
        yield call(myDelay, 2500);
        if(cursor){
            yield put({type: "MODEL_MOUSE_ENTER", item: modelId});
            yield call(myDelay, 2500);
            yield put({type: 'MOUSE_ENTER_ANIMATION', cursor: false});
        }
    }
    catch (e) {
        console.log(e);
    }
}

export function* watchCheckMouse(){
    yield takeLatest("CHECK_MOUSE_ENTER_ASYNC", checkMouseEnter);
}