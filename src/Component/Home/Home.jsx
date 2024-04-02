import CarouselEle from "../Carousel/CarouselEle";
import Featured from "../Featured/Featured";
import ProductIntro from "../ProductIntro/ProductIntro";
import CounterPage from "../CounterPage/CounterPage";
import AddButton from "../Button/AddButton";
import { BannerCom } from "../BannerCom/BannerCom";

function Home() {
  return (
    <>
      <CarouselEle></CarouselEle>
      <Featured></Featured>
      <ProductIntro></ProductIntro>
      <CounterPage></CounterPage>
      <BannerCom></BannerCom>
    </>
  );
}

export default Home;
