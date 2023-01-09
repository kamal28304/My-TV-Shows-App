import {ShowCast} from "../models/showCast"
import {State} from "../store"
import {SHOW_CAST_LOADED} from "../actions/showCast"
import produce from "immer"
import {Action } from "../actions/index"

import {schema,normalize} from "normalizr"
import {anyAction } from "react-redux"

type State={
  cast:{[castId:number]:ShowCast[]}
}
 
 const initialState:State={
  cast:[]
}

const showCastReducer = (state=initialState,action:Action)=>{
  switch(action.type){
    case SHOW_CAST_LOADED:
      return produce(state, (draft) => {
       const cast = action.payload as ShowCast[];
         const castEntity = new schema.Entity("cast");
         const data = normalize(cast, [castEntity]);
        draft.cast = data.entities.cast || {}
      });
    default:
      return state;
  }
}

export default showCastReducer