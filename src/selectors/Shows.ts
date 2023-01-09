import {State} from "../store"
import {createSelector} from "reselect"



export function showsStateSelector(state: State){
  return state.Shows;
} 


export const showsQuerySelector=createSelector(showsStateSelector,(showState)=>showState.query)

 export const showsMapSelector=createSelector(showsStateSelector,(showState)=>showState.shows)

export const showsLoadedSelector=createSelector(showsMapSelector,(showMap)=>Object.keys(showMap).map((showId)=>showMap[+showId]))

export const showsDetailLoadedSelector= createSelector(showsMapSelector,(showMap)=>Object.keys(showMap).map((showId)=>showMap[+showId]))

