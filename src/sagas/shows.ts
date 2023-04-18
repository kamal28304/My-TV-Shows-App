import { call, put } from "redux-saga/effects";
import { Action } from "../actions/index";
import {  showsLoadedAction,showDetailLoadedAction ,loadShowDetailAction} from "../actions/Shows";
import { searchShows, showDetail } from "../api";

export function* fetchShows(action: Action): Generator<any, any, any> {
  const shows = yield call(searchShows, action.payload);
  yield put(showsLoadedAction(shows));
}

export function* fetchSingleShow(action: Action): Generator<any, any, any> {
  const show = yield call(showDetail, action.payload);
  console.log("show in saga",show)

  yield put(showDetailLoadedAction(show));
}
