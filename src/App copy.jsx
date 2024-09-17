import { Header, FirstSlide, SecondSlide, ScrollIcon } from "./components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import desert from "src/assets/img/desert.jpg";
import forest from "src/assets/img/forest.jpg";
import mountain from "src/assets/img/mountain.jpg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Current scroll position:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div id="home"></div>
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        direction={"vertical"}
        modules={[Mousewheel]}
        mousewheel={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SecondSlide />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mountain} alt="" />
          {/* <div
            style={{
              background: `linearGradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mountain})`,
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              zIndex: "10",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
        </SwiperSlide>
      </Swiper>
      <ScrollIcon />
      <div id="contact" className="h-screen w-full bg-orange-400">
        fdfsdf
      </div>
    </>
  );
}

export default App;
