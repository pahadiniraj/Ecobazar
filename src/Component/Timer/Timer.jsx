import React from "react";
import VegetableBasket from "../../assets/Timer/Veg.png";
import ManVeg from "../../assets/Timer/Man.png";
import AddButton from "../Button/AddButton";
import Stopwatch from "../Stopwatch/Stopwatch";
import Clock from "../Clock/Clock";
import { NavLink } from "react-router-dom";

function Timer() {
  return (
    <>
      <div className="bg-[#EDF2EE] py-10  ">
        <div className="flex justify-center container mx-auto items-center  px-28">
          <div className="">
            <img src={VegetableBasket} alt="img" />
          </div>
          <div className="flex flex-col items-center justify-center w-[508px] gap-2 ml-20  ">
            <h2 className="text-[#00B207] text-xs">BEST DEALS</h2>
            <h2 className="font-medium text-3xl text-center ">
              Our Special Products Deal of the Month
            </h2>
            <Clock />
            <NavLink to={"shop"}>
              <AddButton
                className={
                  " bg-[#00B207] rounded-3xl p-2 w-40 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b] text-xs"
                }
                text="Shop Now"
              />
            </NavLink>
          </div>
          <div className="">
            <img src={ManVeg} alt="" className="relative top-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
