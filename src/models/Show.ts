 type Show={
  id: number;
  name:string;
  summary?:string;
  image?:{
  medium:string
  }
  geners:any
  rating?:{
    average:number
  }
}
export default Show;