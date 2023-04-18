import {combineReducers,createStore,applyMiddleware} from "redux"
import showsReducer from "./reducers/Shows"
import showCastReducer from "./reducers/showCast"
import createSagaMiddleware from "redux-saga"
import {composeWithDevTools} from "@redux-devtools/extension"

import { takeLatest,takeEvery,debounce } from "redux-saga/effects";
import { LOAD_CAST,SHOW_CAST_LOADED } from "./actions/showCast";
import { LOAD_SHOW_DETAIL,SHOW_DETAIL_LOADED, SHOWS_QUERY_CHANGE } from "./actions/Shows";
import { fetchShowCast } from "./sagas/showCast";
import { fetchShows, fetchSingleShow } from "./sagas/shows";

const reducer= combineReducers({
  Shows: showsReducer,
  cast: showCastReducer,
})

    

function* rootSaga() {
  yield debounce(300,SHOWS_QUERY_CHANGE, fetchShows);
  yield takeEvery(LOAD_SHOW_DETAIL, fetchSingleShow);
  yield takeLatest(LOAD_CAST, fetchShowCast);
  
}

const sagaMiddleware=createSagaMiddleware()



const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export type State= ReturnType<typeof reducer>

export default store;