import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Stars from "../../Stars/Stars";

const Rating = ({ handleRating }) => {
  const [showRating, setShowRating] = useState(true);

  const listStar = [
    {
      stars: 5,
    },
    {
      stars: 4,
    },
    {
      stars: 3,
    },
    {
      stars: 2,
    },
    {
      stars: 1,
    },
  ];

  const handleRatingClick = () => {
    setShowRating(!showRating);
  };

  const [rating, setRating] = useState([]);

  const handleChange = (value) => {
    const updatedRating = rating.includes(value)
      ? rating.filter((rate) => rate !== value)
      : [...rating, value];
    setRating(updatedRating);
    handleRating(updatedRating);
    
  };

  return (
    <div className="border-b border-slate-200 py-3 ">
      <div>
        <button
          onClick={handleRatingClick}
          className="flex w-full justify-between "
        >
          <div className="text-medium font-medium">Rating </div>
          <div className="text-xl">
            {showRating ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </button>
        {showRating && (
          <div>
            {listStar.map((value, index) => (
              <div
                className="flex justify-start items-center gap-2 p-2"
                key={index}
              >
                <input
                  type="checkbox"
                  id={index}
                  name={value.stars}
                  onChange={(event) => handleChange(event.target.value)}
                  value={value.stars}
                />
                <label htmlFor={value.stars}>
                  <Stars
                    stars={value.stars}
                    className={`flex gap-1 text-[#FF8A00]  items-center justify-start`}
                  />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
