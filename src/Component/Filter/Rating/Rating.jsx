import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Rating = () => {
  const [showRating, setShowRating] = useState(false);

  const listStar = [
    {
      star: 5,
    },
    {
      star: 4,
    },
    {
      star: 3,
    },
    {
      star: 2,
    },
    {
      star: 1,
    },
  ];

  const handleRatingClick = () => {
    setShowRating(!showRating);
  };

  return (
    <div className="border-b border-slate-200 py-2">
      <div>
        <button
          onClick={handleRatingClick}
          className="flex w-full justify-between "
        >
          <div className="text-medium font-medium">Rating</div>
          <div className="text-xl">
            {showRating ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </button>
        {showRating && (
          <div>
            {listStar.map((value, index) => (
              <div>
                <input type="checkbox" id={index} name={value.star} />
                <label for={value.star}>{value.star}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
