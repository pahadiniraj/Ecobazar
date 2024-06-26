import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Price = () => {
  const [showPrice, setShowPrice] = useState(false);
  const handlePrice = () => {
    setShowPrice(!showPrice);
  };
  return (
    <div className="border-b border-slate-200 py-2">
      <button onClick={handlePrice} className=" flex w-full justify-between">
        <div className="text-medium font-medium">Price</div>
        <div className="text-xl">
          {showPrice ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </button>
      <div>{showPrice && <div> hello</div>}</div>
    </div>
  );
};

export default Price;
