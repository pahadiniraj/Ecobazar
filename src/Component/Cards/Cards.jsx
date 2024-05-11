import React, { useState } from "react";
import Stars from "../Stars/Stars";
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import PopupCard from "../PopupCard/PopupCard";
const Cards = ({
  discount,
  image,
  name,
  price,
  stars,
  reviews,
  className,
  Stock,
}) => {
  const [hover, setHover] = useState(false);
  const [loveClicked, setLoveClicked] = useState(false);
  const [lookClicked, setLookClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLoveClick = () => {
    setLoveClicked(!loveClicked);
  };
  const handleLookClick = () => {
    setLookClicked(!lookClicked);
  };
  const handleCartClicked = () => {
    setCartClicked(!cartClicked);
  };
  const handlepopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`bg-white border group  hover:border-green-600 shadow-md hover:shadow-green-300 relative ${className}`}
      >
        {discount ? (
          <div className="bg-red-600 rounded m-2 text-white w-1/3  text-xs  text-center  flex justify-center items-center py-0.5">
            {discount}
          </div>
        ) : (
          <div className="rounded m-4 text-white h-1 w-16 text-sm px-1"></div>
        )}

        {Stock
          ? ""
          : !discount && (
              <div className="bg-slate-500 rounded  text-white w-2/5 py-0.5 text-xs   text-center  flex justify-center items-center absolute top-2  left-3 ">
                Out of Stock
              </div>
            )}

        <div className="   flex items-center justify-center">
          <div
            className="w-[330px]  cursor-pointer"
            onClick={() => setShowPopup(!showPopup)}
          >
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="flex justify-between mx-4 my-2  ">
          <div className="">
            <p
              className="text-slate-500 text-xs group-hover:text-[#2C742F] cursor-pointer"
              onClick={() => setShowPopup(!showPopup)}
            >
              {name}
            </p>
            <p className="font-medium text-sm">{price}</p>

            <Stars
              stars={stars}
              reviews={reviews}
              className={`flex text-[#FF8A00]`}
            />
          </div>
          {hover && (
            <button
              className={` border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2  absolute top-2 right-3   ${
                loveClicked ? "bg-slate-100 text-red-600" : ""
              } `}
            >
              <FaHeart
                className={`text-xl  cursor-pointer  `}
                onClick={handleLoveClick}
              />
            </button>
          )}
          {hover && (
            <button
              className={`border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2   absolute top-12 right-3 ${
                lookClicked ? "text-white bg-green-600" : ""
              }`}
            >
              <FaEye
                onClick={handleLookClick}
                className={`text-xl cursor-pointer `}
              />
            </button>
          )}

          <button
            className={` border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2  absolute bottom-4 right-3 cursor-pointer group-hover:bg-green-600  group-hover:text-white ${
              cartClicked ? "bg-blue-700 text-white" : ""
            }`}
            onClick={handleCartClicked}
          >
            <GiShoppingBag className={`text-xl `} />
          </button>
        </div>
      </div>
      {showPopup && (
        <PopupCard
          onClose={handlepopup}
          discount={discount}
          name={name}
          price={price}
          stars={stars}
          reviews={reviews}
          image={image}
          Stock={Stock}
        />
      )}
    </div>
  );
};

export default Cards;
