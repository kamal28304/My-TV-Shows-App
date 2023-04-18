import axios from "axios"

export const searchShows=async (query:string)=>{
 
  const response = await axios.get("https://api.tvmaze.com/search/shows?q=" + query);
  const shows = response.data.map((item) => item.show);
  let actors = {};
  for (let i = 0; i < shows.length; i++) {
    const castResponse = await axios.get("https://api.tvmaze.com/" + `shows/${shows[i].id}/cast`);
    const cast = castResponse.data.map((e) => e.person);
    actors[shows[i].id] = cast;
  }
  return {shows,actors}
}

export const showDetail=async(showId:number)=>{
  let showArr=[]
  const response= await axios.get(" https://api.tvmaze.com/shows/" + showId)
  const show=response.data
  const castResponse= await axios.get("https://api.tvmaze.com/shows/" + showId + "/cast")
  const cast=castResponse.data.map((item)=>item.person)
  showArr.push(show)

  return {show,cast}
}


export const getShowCast=async (showId:number)=>{
   const response=await axios.get("https://api.tvmaze.com/shows/" + showId + "/cast")
  return response.data.map((items)=>items.person)
}