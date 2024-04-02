import fruit2 from "../../assets/Images/Fruit4-MSI.jpg";
import fruit3 from "../../assets/Images/Fruit3.png";
import fruit from "../../assets/Images/Fruit.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Shop from "../Shop/Shop";
import { useNavigate } from "react-router-dom";
import AddButton from "../Button/AddButton";
import { Button } from "@mui/material";

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
      src: fruit2,
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragrah: "Free shipping in all your order,we deliver,you enjoy",
      btn: "Shop Now",
    },
    {
      src: fruit,
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
      <div className="w-[1200px] mx-auto my-4">
        <Slider {...settings}>
          {banner.map((val, idx) => (
            <div key={idx}>
              <div className="flex ">
                <img src={val.src} alt="img" className="w-[50%]" />
                <div className=" w-full items-center">
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
    </>
  );
}
export default CarouselEle;
