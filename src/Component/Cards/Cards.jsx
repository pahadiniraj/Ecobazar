import React from "react";
import Stars from "../Stars/Stars";
import { GiShoppingBag } from "react-icons/gi";

const Cards = ({ discount, image, name, price, stars, reviews, className }) => {
  return (
    <div>
      <div
        className={`bg-white border group  hover:border-green-600 shadow-md hover:shadow-green-300 ${className}`}
      >
        {discount ? (
          <div className="bg-red-600 rounded m-2 text-white h-5 w-20 text-sm px-1 text-center py-2 flex justify-center items-center">
            {discount}
          </div>
        ) : (
          <div className="rounded m-4 text-white h-1 w-16 text-sm px-1"></div>
        )}
        <div className="   flex items-center justify-center">
          <div className="w-[330px]">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="flex justify-between mx-4 my-2  ">
          <div className="">
            <p className="text-slate-500 text-xs group-hover:text-[#2C742F]">
              {name}
            </p>
            <p className="font-medium text-sm">{price}</p>

            <Stars
              stars={stars}
              reviews={reviews}
              className={`flex text-[#FF8A00]`}
            />
          </div>
          <div className="bg-white border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2 group-hover:bg-[#00B207] group-hover:text-white">
            <GiShoppingBag className="text-xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
