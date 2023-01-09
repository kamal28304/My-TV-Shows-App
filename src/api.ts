import axios from "axios"

export const searchShows=(query:string)=>{
 return axios.get("https://api.tvmaze.com/search/shows?q=" + query).then((response)=>response.data.map((items)=>items.show))
}

export const showDetail=(showId:number)=>{
  return axios.get(" https://api.tvmaze.com/shows/" + showId).then((response)=>response.data)
}


export const getShowCast=(showId:number)=>{
  return axios.get("https://api.tvmaze.com/shows/" + showId + "/cast").then((response)=>response.data.map((items)=>items.person))
}