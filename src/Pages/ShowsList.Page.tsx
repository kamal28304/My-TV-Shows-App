import {useState,useEffect,FC,memo} from "react"
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import {searchShows} from "../api"
import {showsLoadedAction,showsQueryChangeAction} from "../actions/Shows"
import {connect,ConnectedProps} from "react-redux"
import {showsQuerySelector,showsLoadedSelector,showsLoadingSelector} from "../selectors/Shows"
import Show from "../models/Show"
import LoadingSpinner from "../Components/LoadingSpinner"




type ShowListPageProps = ReduxProps
  

 const ShowListPage:FC<ShowListPageProps>=({shows,query,showsQueryChange,loading})=> {
   console.log("shows in list page",shows)
   
  
  return (
    <div className="mt-2">
      <div  className="flex items-center justify-center space-x-4">
      <SearchBar 
        onChange={(event)=>showsQueryChange(event.target.value)} />
        {loading && <LoadingSpinner className="text-3xl"/>}
        </div>
      <div className="flex flex-wrap justify-center">
        {(shows) ?shows.map((s)=> <ShowCard key={s.id} show={s}/>):<div className="text-2xl mt-2 font-bold text-indigo-500">search for your favorite movies and web series</div>}
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
    shows:showsLoadedSelector(state),
    loading:showsLoadingSelector(state)
  }
}
const connector=connect(mapStateToProps,mapDispatchToProps)

type ReduxProps= ConnectedProps<typeof connector>

export default connector(memo(ShowListPage));
