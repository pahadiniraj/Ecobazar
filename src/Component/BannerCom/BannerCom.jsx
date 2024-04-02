import React from "react";
import AddButton from "../Button/AddButton";
import Img1 from "../../assets/Banner/Milk.png";
import Img2 from "../../assets/Banner/Drink.png";
import Img3 from "../../assets/Banner/Breakfast.png";

export const BannerCom = () => {
  const banner = [
    {
      name: "100% Fresh Cow Milk",
      para: "Starting at",
      price: "$14.99",
      button: (
        <AddButton
          className={
            "bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
          }
        ></AddButton>
      ),
      src: Img1,
    },
    {
      name: "Water & Soft Drink",
      para: "DRINK SALE",
      price: "$14.99",
      button: (
        <AddButton
          className={
            "bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
          }
        ></AddButton>
      ),
      src: Img2,
    },
    {
      name: "Quick Breakfast",
      para: "100% ORGANIC ",
      price: "$14.99",
      button: (
        <AddButton
          className={
            "bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
          }
        ></AddButton>
      ),
      src: Img3,
    },
  ];

  return (
    <>
      <div className=" flex justify-center p-20 mx-auto ">
        <div className=" flex justify-center gap-4 w-[1320px]  p-1  ">
          {banner.map((val, idx) => (
            <div
              key={idx}
              style={{ backgroundImage: `url(${val.src})` }}
              className="w-2/4 h-[225px] bg-cover bg-center rounded-lg p-2"
            >
              {idx === 0 ? (
                <div className=" flex flex-col p-4 gap-2 w-[220px] text-white ">
                  <h2 className="text-2 text-3xl font-semibold">{val.name}</h2>
                  <span className="text-white flex gap-1  items-center">
                    <span className="text-xs "> {val.para}</span>
                    <span className="text-white text-lg">{val.price}</span>
                  </span>
                  <AddButton
                    text="Shop now"
                    className={
                      "bg-white rounded-3xl p-1 w-3/4 text-[#0bc70b] font-medium flex justify-center gap-3 items-center hover:bg-slate-200"
                    }
                  ></AddButton>
                </div>
              ) : (
                ""
              )}
              {idx === 1 ? (
                <div>
                  <div className=" flex flex-col justify-end items-end p-4 gap-2  text-black ">
                    <p className="text-sm font-semibold w-2/4">{val.para}</p>
                    <h2 className="text-2 text-3xl font-semibold w-2/4">
                      {val.name}
                    </h2>
                    <span className="text-white flex gap-1  items-center"></span>
                    <AddButton
                      text="Shop now"
                      className={
                        "bg-white rounded-3xl p-1 w-2/4 text-[#0bc70b] font-medium flex justify-center gap-3 items-center hover:bg-slate-200 "
                      }
                    ></AddButton>
                  </div>
                </div>
              ) : (
                ""
              )}
              {idx === 2 ? (
                <div className=" flex flex-col p-4 gap-2 w-[220px] text-black ">
                  <p className="text-sm font-semibold">{val.para}</p>
                  <h2 className="text-2 text-3xl font-semibold">{val.name}</h2>
                  <span className=" flex gap-1  items-center"></span>
                  <AddButton
                    text="Shop now"
                    className={
                      "bg-white rounded-3xl p-1 w-3/4 text-[#0bc70b] font-medium flex justify-center gap-3 items-center hover:bg-slate-200"
                    }
                  ></AddButton>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
