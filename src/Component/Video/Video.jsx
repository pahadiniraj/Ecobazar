import React from "react";
import video from "../../assets/Video/Vid.mp4";
import { useRef } from "react";
import { PiPlayCircleThin } from "react-icons/pi";
import { PiPauseCircleThin } from "react-icons/pi";
import { useState } from "react";
import { useEffect } from "react";
const Video = () => {
  const vidRef = useRef(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let timer;
    if (showControls) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showControls]);

  const handleClick = () => {
    if (vidRef?.current?.paused) {
      vidRef?.current?.play();
      setIsPlaying(true);
      setShowControls(false);
    } else {
      vidRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };
  const handleMouseLeave = () => {
    setShowControls(false);
    setShowText(true);
  };

  return (
    <div
      className="w-full relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-32  ">
        <div className=" flex justify-center items-center text-white ">
          <video className="rounded-md" ref={vidRef}>
            <source src={video} />
            <div className="w-50 h-50 bg-red-200"></div>
          </video>
          {showControls && (
            <div className="absolute items-center flex justify-center flex-col w-1/4">
              {showText && (
                <div className="text-2xl text-center font-semibold">
                  We’re the Best Organic Farm in the World
                </div>
              )}
              <button onClick={handleClick}>
                {isplaying ? (
                  <PiPauseCircleThin className="text-7xl" />
                ) : (
                  <PiPlayCircleThin className="text-7xl " />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
