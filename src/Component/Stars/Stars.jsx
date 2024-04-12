import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Stars = ({ stars, reviews }) => {
  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <IoIosStar />
        ) : stars >= number ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });

  return (
    <div className="flex">
      <p className="flex text-[#FF8A00]">{ratingStars}</p>
    </div>
  );
};

export default Stars;
