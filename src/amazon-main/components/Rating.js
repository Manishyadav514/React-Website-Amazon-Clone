import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? <AiFillStar className="w-5 h-5 text-yellow-300"/> : <AiFillStar className="w-5 h-5 text-neutral-50"/>}
        </span>
      ))}
    </div>
  );
};
export default Rating;
