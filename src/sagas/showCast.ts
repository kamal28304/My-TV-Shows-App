import { call, put } from "redux-saga/effects";
import { Action } from "../actions/index";
import {  showCastLoadedAction } from "../actions/showCast";
import { getShowCast } from "../api";


export function* fetchShowCast(action: Action): Generator<any, any, any> {
  const showCast = yield call(getShowCast, action.payload);
  console.log("showCast",showCast)
  yield put(showCastLoadedAction(showCast));
}
