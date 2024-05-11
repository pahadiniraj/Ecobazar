import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Stars from "../Stars/Stars";
import { IoClose } from "react-icons/io5";

const PopupCard = ({
  discount,
  image,
  name,
  price,
  stars,
  reviews,
  Stock,
  onClose,
}) => {
  return (
    <div className="fixed  inset-0  bg-opacity-40 bg-black z-10 backdrop-blur-sm  justify-center flex items-center ">
      <div className="h-[400px] w-[800px] bg-white p-2  rounded-md flex gap-4 relative">
        <button onClick={onClose} className="absolute right-2">
          <IoClose />
        </button>
        <Carousel className="flex  bg-red-300">
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-center gap-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <div className="bg-green-200  border-black border p-1 text-xs text-[#2C742F]  rounded-md">
              {Stock ? <div>In Stock</div> : <div>Out of Stock</div>}
            </div>
          </div>

          <div className="flex justify-start items-center gap-1">
            <Stars stars={stars} className={`text-[#FF8A00] flex`} />

            <span className="text-xs text-[#666666]">{reviews} Review</span>
          </div>
          <div className="text-xl font-medium text-[#2C742F]">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
