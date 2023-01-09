import {SHOWS_LOADED,SHOWS_QUERY_CHANGE,SHOW_DETAIL_LOADED,LOAD_SHOW_DETAIL} from "../actions/Shows"
import {anyAction } from "react-redux"
import Show from "../models/Show"
import produce from "immer"
import {schema,normalize} from "normalizr"
import {Action } from "../actions/index"

export type State={
  shows:{[showId:number]: Show};
  query: string
}
const initialState:State={
  shows: [],
  query:""
}

 function showsReducer(state=initialState,action:Action) {
  switch(action.type){
    case SHOWS_LOADED:
      return produce(state,(draft)=>{
       const shows= action.payload as Show[]
        const showsEntity=new schema.Entity("shows")

        const normalizedData=normalize(shows,[showsEntity])
        draft.shows = normalizedData.entities.shows! || {};
      })
    case SHOWS_QUERY_CHANGE:
      return produce(state,(draft)=>{
        draft.query= action.payload as string
      });
      
      case SHOW_DETAIL_LOADED:
      return produce(state,(draft)=>{
       const show= action.payload as Show
        const showEntity=new schema.Entity("showsDetail")

        const data = normalize(show, showEntity);
        draft.shows[show.id] = data.entities.showsDetail[show.id]
      })
    
    default:
      return state;
  }
}

export default showsReducer;