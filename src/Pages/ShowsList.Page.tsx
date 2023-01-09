import {useState,useEffect,FC,memo} from "react"
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import {searchShows} from "../api"
import {showsLoadedAction,showsQueryChangeAction} from "../actions/Shows"
import {connect} from "react-redux"
import {showsQuerySelector,showsLoadedSelector} from "../selectors/Shows"
import Show from "../models/Show"



type ShowListPageProps={
  query:string;
  shows: Show[];
  showsQueryChange:(query:string)=>void;
  
}

 const ShowListPage:FC<ShowListPageProps>=({shows,query,showsQueryChange})=> {
  
  return (
    <div className="mt-2">
      <SearchBar onChange={(event)=>showsQueryChange(event.target.value)} />
      <div className="flex flex-wrap justify-center">
        {(shows.length>0 ) ?shows.map((s)=> <ShowCard key={s.id} show={s}/>):<div className="text-2xl mt-2 font-bold text-indigo-500">search for your favorite movies and web series</div>}
      </div>
     
    </div>
  );
}
const mapDispatchToProps={
  showsQueryChange:showsQueryChangeAction,
}

const mapStateToProps=(state:State)=>{
  return {
    query:showsQuerySelector(state),
    shows:showsLoadedSelector(state)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(ShowListPage));
