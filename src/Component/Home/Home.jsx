import CarouselEle from "./Carousel/CarouselEle";
import Featured from "./Featured/Featured";
import ProductIntro from "./ProductIntro/ProductIntro";
import CounterPage from "./CounterPage/CounterPage";
import { BannerCom } from "./BannerCom/BannerCom";
import Timer from "./Timer/Timer";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import News from "./News/News";
import Video from "./Video/Video";
import Testimonial from "./Testimonial/Testimonial";
import Subscribe from "../Subscribe/Subscribe";
import { useEffect, useState } from "react";

function Home() {
  const [showSub, setShowSub] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSub(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
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
      {showSub && <Subscribe onClose={() => setShowSub(false)} />}
    </>
  );
}

export default Home;
