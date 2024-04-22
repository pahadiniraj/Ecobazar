import React from "react";
import img1 from "../../../assets/News/Image1.png";
import img2 from "../../../assets/News/Image2.png";
import img3 from "../../../assets/News/Image3.png";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const News = () => {
  let obj = [
    {
      src: img1,
      heading: "Curabitur porttitor orci eget neque accumsan venenatis.",
      para: "Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.",
      read: "Read More",
      date: "23",
      month: "JAN",
    },
    {
      src: img2,
      heading: "Curabitur porttitor orci eget neque accumsan venenatis.",
      para: "Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.",
      read: "Read More",
      date: "23",
      month: "JAN",
    },
    {
      src: img3,
      heading: "Curabitur porttitor orci eget neque accumsan venenatis.",
      para: "Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.",
      read: "Read More",
      date: "23",
      month: "JAN",
    },
  ];

  return (
    <div className=" w-full  ">
      <div className="container mx-auto  px-28 ">
        <h2 className="text-center m-4 text-2xl font-semibold">Latest News</h2>
        <div className=" p-3 ">
          <div className="grid grid-cols-3 gap-4">
            {obj.map((val, idx) => (
              <div
                key={idx}
                className=" p-4 gap-1 flex flex-col shadow-lg  rounded-md "
              >
                <div className="bg-red-200 relative w-full">
                  <img src={val.src} alt="img"></img>
                  <div className=" bg-blue-200 w-14 h-14 absolute bottom-4 left-4 flex items-center justify-center opacity-80 rounded-md flex-col">
                    <p className="font-semibold text-xl">{val.date}</p>
                    <p className="text-sm">{val.month}</p>
                  </div>
                </div>
                <div className="pr-3 mt-2 flex flex-col gap-1 ">
                  <div className="text-sm font-medium ">
                    <h3>{val.heading}</h3>
                  </div>
                  <div className="text-xs">
                    <p>{val.para}</p>
                  </div>
                  <NavLink to="blog">
                    <div className="flex items-center gap-2 text-[#00B207] ">
                      <p className="text-sm font-medium ">{val.read}</p>
                      <FaArrowRightLong className="mt-1" />
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
