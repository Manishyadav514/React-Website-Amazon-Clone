import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? <AiFillStar className="w-4 h-4 text-yellow-300"/> : <AiFillStar className=" w-3 h-3 text-slate-200"/>}
        </span>
      ))}
    </div>
  );
};
export default Rating;
