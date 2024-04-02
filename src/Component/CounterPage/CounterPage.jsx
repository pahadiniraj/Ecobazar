import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterPage() {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="bg-black  h-[311px] w-full ">
      <div className="h-full mx-auto justify-center flex items-center">
        <div className="  h-3/4 w-[1320px] justify-center flex items-center gap-8 ">
          {[
            {
              count: 37,
              discription: "Years of Hard Work",
              sign: "+",
            },
            {
              count: 500,
              discription: "Years of Hard Work",
              sign: "k+",
            },
            {
              count: 28,
              discription: "Years of Hard Work",
            },
            {
              count: 750,
              discription: "Years of Hard Work",
              sign: "k+",
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-slate-800 h-3/4 w-1/4  rounded flex flex-col justify-center items-center gap-1 "
            >
              <ScrollTrigger
                onEnter={() => setCounterState(true)}
                onExit={() => setCounterState(false)}
              >
                <h2 className="text-5xl text-green-500">
                  {counterState && (
                    <CountUp start={0} end={val.count} duration={3.5}></CountUp>
                  )}

                  {val.sign}
                </h2>
              </ScrollTrigger>
              <p className="text-white">Year of HardWork</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
