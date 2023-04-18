import {State} from "../store"
import {createSelector} from "reselect"



export function showsStateSelector(state: State){
  console.log("state",state)
  return state.Shows;
} 


export const showsQuerySelector=createSelector(showsStateSelector,(showState)=>showState.query)

 export const showsMapSelector=createSelector(showsStateSelector,(showState)=>showState.shows)

export const queryShowsMapSelector=createSelector(showsStateSelector,(showState)=>showState.query_shows)
export const showsLoadingSelector=createSelector(showsStateSelector,(showState)=>showState.loading)

export const showsLoadedSelector=createSelector(showsMapSelector,showsQuerySelector,queryShowsMapSelector,(showMap,query,queryShowsMap)=>queryShowsMap[query]?.map((showId)=>showMap[showId]))



