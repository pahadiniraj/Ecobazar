import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaComments } from "react-icons/fa6";
import img from "../../assets/Test/Image.png";

const Testimonial = () => {
  let discription = [
    {
      comment:
        "“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”",
      src: img,
      name: "Reemsh Kc",
      position: "CEO",
    },
    {
      comment:
        "“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”",
      src: img,
      name: "Reemsh Kc",
      position: "CEO",
    },
    {
      comment:
        "“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”",
      src: img,
      name: "Reemsh Kc",
      position: "CEO",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="bg-[#EDF2EE] w-full py-10  ">
      <div className="container mx-auto px-28 py-10 ">
        <h1 className="text-center font-semibold text-2xl">
          What our Clients Says
        </h1>
        <div className="p-5  ">
          <Slider {...settings}>
            {discription.map((val, idx) => (
              <div className=" " idx={idx}>
                <div className="flex flex-col p-5 gap-3 ">
                  <div className="bg-white flex flex-col items-center justify-center p-4 rounded-md gap-2">
                    <div className="text-4xl text-green-500">
                      <FaComments />
                    </div>
                    <p className="text-xs text-center">{val.comment}</p>
                  </div>
                  <div className=" flex justify-center items-center flex-col">
                    <div className="w-10 h-10">
                      <img src={val.src} alt="img" />
                    </div>
                    <p className="text-xs font-medium">{val.name}</p>
                    <p className="text-xs font-light text-slate-600">
                      {val.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
