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
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[url(/logoSlide.png)] text-white text-center py-16 rounded-lg">
            Slide {i + 1}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
