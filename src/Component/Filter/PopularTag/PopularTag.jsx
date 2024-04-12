import { button } from "@material-tailwind/react";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const PopularTag = () => {
  const tags = [
    {
      name: "Healthy",
    },
    {
      name: "Low Fat",
    },
    {
      name: "Vegetarian",
    },
    {
      name: "Kid foods",
    },
    {
      name: "Vitamins",
    },
    {
      name: "Bread",
    },
    {
      name: "Meat",
    },
    {
      name: "Snacks",
    },
    {
      name: "Tiffin",
    },
    {
      name: "Lunch",
    },
    {
      name: "Dinner",
    },
    {
      name: "Breakfast",
    },
    {
      name: "Fruits",
    },
  ];

  const [showTag, setShowTag] = useState(false);

  const handleTagClick = () => {
    setShowTag(!showTag);
  };
  return (
    <div className="py-2">
      <div>
        <button
          onClick={handleTagClick}
          className="flex w-full justify-between"
        >
          <div className="text-base font-medium">Show Tag</div>
          <div className="text-xl">
            {showTag ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </button>
        <div>
          {showTag && (
            <div className="py-2">
              {tags.map((value, index) => (
                <button className="p-2 text-xs bg-[#F2F2F2]  rounded-2xl m-1 hover:bg-[#00B207] hover:text-white">
                  {value.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularTag;
