import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import FilterOption from "../FilterOption/FilterOption";
const FilterProduct = ({ onGetSelect }) => {
  const handleOnChange = (event) => {
    onGetSelect(event.target.value);
  };

  return (
    <div>
      <div className="  w-full  ">
        <div className=" container mx-auto px-32 mt-4 ">
          <div className="flex justify-between  ">
            <div className="flex gap-44 relative">
              <button className="bg-[#00B207] flex justify-center items-center gap-2  px-6 py-3 rounded-3xl text-white text-sm ">
                Filter
                <LuSettings2 className="text-xl" />
              </button>

              <div className="flex justify-center items-center">
                <div>
                  <p className="text-xs text-[#808080]">Sort by:</p>
                </div>
                <span className=" text-slate-500 text-xs mx-2 border rounded-md">
                  <label htmlFor="filter-select">
                    <select
                      onChange={handleOnChange}
                      id="filter-select"
                      className=" focus:outline-none p-2 w-28 rounded-md"
                    >
                      <option value="">All</option>
                      <option value="latest"> Latest</option>
                      <option value="popular">Popular</option>
                      <option value="sale">Sale</option>
                    </select>
                  </label>
                </span>
              </div>
            </div>
            <div className="flex gap-1 text-xs items-center">
              {" "}
              <p className="font-bold ">52</p>
              <p className="text-[#666666]">Result Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
