import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Img from "../../../assets/CounterImg/BG.png";

function CounterPage() {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="bg-black   w-full ">
      <div className=" container mx-auto">
        <div className="justify-center flex items-center h-[311px] px-28">
          {[
            {
              count: 37,
              discription: "Years of Hard Work",
              sign: "+",
            },
            {
              count: 500,
              discription: "Happy Customer",
              sign: "k+",
            },
            {
              count: 28,
              discription: "Qualified Team Member",
            },
            {
              count: 750,
              discription: "Monthly Orders",
              sign: "k+",
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded flex flex-col justify-center items-center gap-1 mx-4 w-[312px] h-[174px] "
            >
              <ScrollTrigger
                onEnter={() => setCounterState(true)}
                // onExit={() => setCounterState(false)}
              >
                <h2 className="text-4xl text-green-500 ">
                  {counterState && (
                    <CountUp start={0} end={val.count} duration={3.5}></CountUp>
                  )}

                  {val.sign}
                </h2>
              </ScrollTrigger>
              <p className="text-white text-sm">{val.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
