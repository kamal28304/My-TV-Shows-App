import {FC} from "react"
import { Link } from "react-router-dom";
import Show from "../models/show"
import Avatar from "./Avatar"

type ShowcardProps={
  show: any
}

const ShowCard:FC<ShowcardProps>=({show})=> {
  const placeholderImage="https://media.istockphoto.com/id/1448818026/photo/street-horizontal-advertising-banner-on-the-wall-with-clean-white-template-for-inserting-text.jpg?s=612x612&w=is&k=20&c=7jl21jg43VTQ4_O2f8P8StNZDsd7gOszsfrA7RMC2sE="

  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || placeholderImage }
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p dangerouslySetInnerHTML={{__html: show.summary}}></p>
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md">
          View Details
        </Link>
        <Avatar cast={show.cast}/>
          
    
    
      </div>
      
    </div>
  );
}

export default ShowCard;
