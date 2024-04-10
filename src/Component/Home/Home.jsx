import CarouselEle from "../Carousel/CarouselEle";
import Featured from "../Featured/Featured";
import ProductIntro from "../ProductIntro/ProductIntro";
import CounterPage from "../CounterPage/CounterPage";
import { BannerCom } from "../BannerCom/BannerCom";
import Timer from "../Timer/Timer";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import News from "../News/News";
import Video from "../Video/Video";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  return (
    <>
      <CarouselEle />
      <Featured />
      <ProductIntro />
      <CounterPage />
      <BannerCom />
      <Timer />
      <FeaturedProduct />
      <Testimonial />
      <Video />
      <News />
    </>
  );
}

export default Home;
