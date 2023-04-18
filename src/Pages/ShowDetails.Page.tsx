import { FC ,useEffect,memo} from "react";
import {Link} from "react-router-dom"
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import {loadShowDetailAction} from "../actions/Shows"
import {loadShowCastAction} from "../actions/showCast"

import {showsMapSelector} from "../selectors/Shows"
import {showCastSelector} from "../selectors/showCast"
import LoadingSpinner from "../Components/LoadingSpinner"
import {connect} from "react-redux"
import Show from "../models/Show"
import {ShowCast} from "../models/showCast"
import {IoArrowBack} from "react-icons/io5"

type OwnProps= WithRouterProps

type ShowDetailPageProps = ReduxProps & OwnProps

const placeholderImage="https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params,show,cast,loadShowDetail,loadCast}) => {
  const show_id= +params.show_id

  useEffect(()=>{
      loadShowDetail(show_id)
      loadCast(show_id)  
     },[show_id])

  if (!show){
    return <LoadingSpinner />
  }
  return (
    <div className="mt-2 p-3">
      
      <h2 className="text-4xl font-semibold tracking-wide">{show?.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show?.genres?.map((genre,index)=> <GenrePill key={index} genre={genre} />)}
      </div>
      <Link className="font-bold text-xl" to="/">
        Back
      </Link>
      <div className="mt-2 flex">
        <img
          src={show?.image?.medium || placeholderImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{__html:show?.summary}}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show?.rating?.average/10 || 0}</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
       
     {(cast.length >0 )?  cast.map((c)=><CastCard
    key={c.id}
    avatarLink={c.image?.medium || placeholderImage} 
name={c.name}/>) : <div className="text-2xl font-semibold "> No Cast Available</div> }
    </div>
      </div>
    </div>
  );
};
const mapStateToProps=(state:State,ownProps:OwnProps)=>{
  const show_id= +ownProps.params.show_id
  return {
  show: showsMapSelector(state)[show_id],
  cast: showCastSelector(state)
  }
}
const mapDispatchToProps = {
  loadShowDetail: loadShowDetailAction,
  loadCast: loadShowCastAction,
};

const connector=connect(mapStateToProps,mapDispatchToProps)

type ReduxProps=ConnectedProps<typeof connector>


export default withRouter(connector(memo(ShowDetailPage)));
