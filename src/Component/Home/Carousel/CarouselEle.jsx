import img1 from "../../../assets/Images/Slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import AddButton from "../../Button/AddButton";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

function CarouselEle() {
  const banner = [
    {
      src: img1,
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragrah: "Free shipping in all your order,we deliver,you enjoy",
      btn: "Shop Now",
    },
    {
      src: img1,
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragrah: "Free shipping in all your order,we deliver,you enjoy",
      btn: "Shop Now",
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("shop");
  };

  return (
    <>
      <div className=" px-20 py-10">
        <div className="container mx-auto  ">
          <Slider {...settings} className="">
            {banner.map((val, idx) => (
              <div key={idx} className="px-5   ">
                <div className="flex justify-center   gap-10 items-center ">
                  <div className="">
                    <img src={val.src} alt="img" />
                  </div>
                  <div className="">
                    <div className="flex flex-col justify-center h-full">
                      <div className="w-[400px] flex flex-col gap-3">
                        <p>{val.subHeading}</p>
                        <h2 className="text-4xl">{val.heading}</h2>
                        <p>{val.paragrah}</p>
                        <AddButton
                          className={
                            " bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
                          }
                          text="Shop Now"
                          click={handleClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default CarouselEle;
