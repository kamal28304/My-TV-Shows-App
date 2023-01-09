import Show from "../models/Show"
import {ActionCreator} from "./index"

export const SHOWS_LOADED="SHOWS_LOADED"

export const showsLoadedAction: ActionCreator<Show[]>=(shows:Show[])=>({
  type: SHOWS_LOADED,
  payload: shows
})

export const SHOWS_QUERY_CHANGE="SHOWS_QUERY_CHANGE"

export const showsQueryChangeAction :ActionCreator<string>=(query:string)=>({
  type:SHOWS_QUERY_CHANGE,
  payload: query
})

export const SHOW_DETAIL_LOADED="SHOW_DETAIL_LOADED"

export const showDetailLoadedAction:ActionCreator<Show>=(show:Show)=>({
  type:SHOW_DETAIL_LOADED,
  payload:show
})


export const LOAD_SHOW_DETAIL="LOAD_SHOW_DETAIL"

export const loadShowDetailAction:ActionCreator<number>=(showId:number)=>({
  type: LOAD_SHOW_DETAIL,
  payload: showId
})

