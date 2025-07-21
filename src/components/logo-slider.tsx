"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const LogoSlider: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Swiper
      className="max-w-[1600px] mx-auto mt-15"
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay]}
    >
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i}>
          <div className=" text-white text-center py-16 rounded-lg">
            <img src="/logoSlide.png" alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
