import React from "react";
import img from "../../assets/FilterDisImg/Banner.png";

const FilterDiscount = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className=" bg-cover text-center  rounded-xl "
      >
        <div className="flex h-[295px] justify-center p-2 ">
          <span>79%</span>
          <span>Discount</span>
          <div>
            <p>on your first order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDiscount;
