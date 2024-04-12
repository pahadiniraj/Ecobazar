import React from "react";
import AllCatagories from "../Filter/AllCatagories/AllCatagories";
import Rating from "../Filter/Rating/Rating";
import Price from "../Filter/Price/Price";
import PopularTag from "../Filter/PopularTag/PopularTag";
import FilterDiscount from "../FilterDiscount/FilterDiscount";
import SaleProduct from "../SaleProduct/SaleProduct";

const UnderFilter = () => {
  return (
    <div className="w-full">
      <div className="container  mx-auto px-32">
        <div className="w-full flex">
          <div className="w-96 p-2">
            <AllCatagories />
            <Rating />
            <Price />
            <PopularTag />
            <FilterDiscount />
            <SaleProduct />
          </div>
          <div className="w-full bg-blue-200 ">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFilter;
