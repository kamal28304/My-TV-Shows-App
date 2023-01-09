import {ShowCast} from "../models/showCast"

export const LOAD_CAST="LOAD_CAST"
export const loadShowCastAction:ActionCreator<number> =(castId:number)=>({
  type:LOAD_CAST,
  payload: castId
})


export const SHOW_CAST_LOADED= "SHOW_CAST_LOADED"

export const showCastLoadedAction:ActionCreator<ShowCast[]> =(showCast:ShowCast[])=>({
  type:SHOW_CAST_LOADED,
  payload: showCast
})