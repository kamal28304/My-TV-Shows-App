import {  useState } from 'react'
import {AvatarType} from "../models/Avatar"




const placeholderImage="https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"

const Avatar = ({ cast }: { cast: AvatarType[] }) => {
  const [click, setClick]= useState(false)
  return(
    <div className="flex">
      {cast?.map((c,index)=> {
      if (index<3) return <img className="rounded-full h-12 w-12 object-cover" src={c.image?.medium || placeholderImage}/>
    if(index==3) return <div onClick={()=>setClick(!click)}
                    className="rounded-full h-12 w-12 border border-gray-300 text-center flex items-center justify-center">
  <h1>+{ cast.length - 3}</h1></div> })}
      {click && <div className="bg-gray-500 p-2 rounded-md overflow-scroll h-52 w-52">
        {cast.map((cast)=>
      <div className="flex gap-2 p-2 overflow-scroll" key={cast.id}>
        <img className="rounded-full h-12 w-12 object-cover" 
          src={cast.image?.medium || placeholderImage}/>
          <h1>{cast.name}</h1>
        </div>)}
      </div>}
      
    </div>
  )
}

export default Avatar;
