import { memo } from "react";

const GenrePill = ({genre}:any) => {
  console.log(genre)
  return <div>
    <p className="font-semibold">{genre}</p>
  </div>
};

export default memo(GenrePill);
