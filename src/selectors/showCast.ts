import {State} from "../store"
import {createSelector} from "reselect"


export function showCastStateSelector(state:State){
  return state.cast;
}

export const showCastMapSelector=createSelector(showCastStateSelector,(castState)=>castState.cast)

export const showCastSelector=createSelector(showCastMapSelector,(castMap)=>Object.keys(castMap).map((castId)=>castMap[+castId]))
