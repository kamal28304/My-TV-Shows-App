import {SHOWS_LOADED,SHOWS_QUERY_CHANGE,SHOW_DETAIL_LOADED,LOAD_SHOW_DETAIL} from "../actions/Shows"
import {anyAction } from "react-redux"
import Show from "../models/Show"
import {ShowCast} from "models/showCast"
import {AvatarType} from "../models/Avatar"


import produce from "immer"
import {schema,normalize} from "normalizr"
import {Action } from "../actions/index"

export type State={
  shows:{
shows:{[showId:number]: Show},
actors:{[actorId: number]: AvatarType}
  };
  query_shows:{[query:string]:number[]};
  loading:boolean;
  query: string
}
const initialState:State={
  shows: {},
  query_shows:{},
  query:"",
  loading:false
}

 function showsReducer(state=initialState,action:Action) {
  switch(action.type){
    case SHOWS_LOADED:
      const {shows, actors } = action.payload as {shows: Show[], actors: AvatarType[] }
      
    const showEntity = new schema.Entity("shows")
    const normalized = normalize(shows, [showEntity])
    const normalizedShows = shows.reduce((prev, curr) =>{
      return{
      ...prev, [curr.id]: {...curr, cast:[...actors[curr.id]]}
    }}, {})
    return produce(state, draft => {
        draft.shows = {...draft.shows, ...normalizedShows};
     // draft.shows.cast=actors
draft.loading = false;
        draft.query_shows[draft.query] = normalized.result
    });
      
    case SHOWS_QUERY_CHANGE:
      return produce(state,(draft)=>{
        draft.query= action.payload as string
        draft.loading=true
      });
      
      case SHOW_DETAIL_LOADED:
       return produce(state,(draft)=>{
       const {show,cast}= action.payload as {show:any[],cast:any}
         console.log("show in reducer",show)
        // const normalizedShows = //show.reduce((prev, curr) =>{
      //return{
     // ...prev, [curr.id]: //{...curr, cast:cast}
   // }}, {})
         console.log(action.payload)
    
        const showEntity=new schema.Entity("showsDetail")

        const data = normalize(show, showEntity);
        draft.shows[show.id] = [...normalizedShows]
      })
    
    default:
      return state;
  }
}

export default showsReducer;


