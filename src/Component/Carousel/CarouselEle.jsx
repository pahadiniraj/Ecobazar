import fruit2 from "../../assets/Images/Fruit4-MSI.jpg";
import fruit3 from "../../assets/Images/Fruit3.png";
import fruit from "../../assets/Images/Fruit.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Shop from "../Shop/Shop";
import { useNavigate } from "react-router-dom";
function CarouselEle() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "none" }}
        onClick={onClick}
      />
    );
  }

  const navigate = useNavigate();

  const images = [fruit, fruit2];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="flex m-5 p-4 gap-2   ">
        <div className="flex justify-center items-center  p-10 overflow-hidden w-2/4 ">
          <Slider {...settings} className=" w-full">
            {images.map((image, idx) => (
              <img
                className="  p-10 flex items-center justify-center"
                key={idx}
                src={image}
              ></img>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col w-2/4 justify-start py-20 gap-2">
          <h2 className="font-normal text-green-500 text-sm">
            WELCOME TO SHOPERY
          </h2>
          <h1 className="font-bold text-5xl">Fresh & Healthy</h1>
          <h1 className="font-bold text-5xl mb-4 "> Organic Food</h1>
          <h2 className="text-slate-400 mb-6">
            Free shipping on all your order. we deliver, you enjoy{" "}
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="w-1/4 flex gap-4 bg-[#0acd0a] px-5 py-3 rounded-3xl text-white items-center justify-center hover:bg-[#00B207]"
          >
            <p>Shop Now </p> <ArrowForwardIcon></ArrowForwardIcon>
          </button>
        </div>
      </div>
    </>
  );
}
export default CarouselEle;
