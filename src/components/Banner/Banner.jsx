import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePA60MDWD9UaRqIfHrJcM_taxao8QgHUEVtvtZaZrxUAq6h47&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyz8_llCkXdpIT0pgMChsRZE6MHmsjbk4_ZYBCJEOT5h_KH8&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkdCtpecyFz80rC9Gj3dQJd6NBn29V8rRlLqdzigX141_QtQ&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjifgB3pBZ37_ob7i0FBPpLwTzTgZLdlFVwA9LE-H-gR2DT78&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SgQI4KiN5ilYfTOhSz00oiQUThK-MOXnfPaZ2IOHMgjldvs&s"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
