"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className="text-black text-bold flex justify-start">Kid's Room</h1>
          <img src="/assets/c1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-black text-bold flex justify-start">BathRoom</h1>
          <img src="/assets/c2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-black text-bold flex justify-start"> Capsule Lift @ Walnut Tower
  
Double Highted Air-Con Lobby</h1>
          <img src="/assets/c3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-black text-bold flex justify-start">
            Grand Entrance Foyer 25ft High
          </h1>
          <img src="/assets/c4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
