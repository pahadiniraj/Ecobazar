import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import PriceComponent from "../../Price/PriceComponent";

const Price = ({ handleSelectedPrice }) => {
  const [showPrice, setShowPrice] = useState(true);

  const handlePrice = () => {
    setShowPrice(!showPrice);
  };

  return (
    <div className="border-b border-slate-200 py-3">
      <button onClick={handlePrice} className=" flex w-full justify-between">
        <div className="text-medium font-medium text-xs md:text-xl">Price</div>
        <div className="text-xs md:text-lg">
          {showPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </button>
      <div>
        {showPrice && (
          <PriceComponent handleSelectedPrice={handleSelectedPrice} />
        )}
      </div>
    </div>
  );
};

export default Price;
