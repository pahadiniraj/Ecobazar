import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const AllCatagories = () => {
  const list = [
    {
      name: "Fresh Fruit",
    },
    {
      name: "Vegetables",
    },
    {
      name: "Cooking",
    },
    {
      name: "Snacks",
    },
    {
      name: "Beverages",
    },
    {
      name: "Beauty & Health",
    },
    {
      name: "Bread & Bakery",
    },
  ];

  const [showList, setShowList] = useState(false);

  const handleCatagoriesClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="border-b border-slate-200  py-2 ">
      <div>
        <button
          className="w-full text-left flex items-center justify-between"
          onClick={handleCatagoriesClick}
        >
          <div className="text-base font-medium">All Catagories</div>
          <div className="text-xl">
            {showList ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </button>
      </div>
      {showList && (
        <div className="py-2 ">
          {list.map((val, idx) => (
            <div className="p-1 text-sm flex items-center">
              <input
                type="radio"
                id={idx}
                name="catagories"
                value={idx}
                className="mr-1 "
              />
              <label for={idx}>{val.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCatagories;
