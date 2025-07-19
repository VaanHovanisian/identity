"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const images = [
  "/sliderImg1.png",
  "/sliderImg3.png",
  "/sliderImg2.png",
  "/sliderImg3.png",
  "/sliderImg2.png",
  "/sliderImg2.png",
  "/sliderImg3.png",
];

import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const MostView: React.FC<Props> = (props) => {
  const { className } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const total = images.length;

  const t = useTranslations("Most Viewed");

  const getRelativeIndex = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div
      className={cn(
        "w-full max-w-[1600px] mx-auto px-4 py-16 relative",
        className
      )}
    >
      <h2 className="text-[#781214] text-5xl leading-[133%] font-bebas font-semibold mb-10 tracking-tight text-left">
        {t("title")}
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative min-h-[500px]"
      >
        {images.map((src, index) => {
          const pos = getRelativeIndex(index);

          if (pos < -2 || pos > 2) {
            return (
              <SwiperSlide
                key={index}
                style={{
                  opacity: 0,
                  pointerEvents: "none",
                  transition: "opacity 0.5s ease",
                }}
              />
            );
          }

          let style: React.CSSProperties = {
            position: "relative",
            transition: "all 0.5s ease",
            cursor: "pointer",
          };

          let scale = 1;
          let zIndex = 10;
          let opacity = 1;
          let filter = "none";
          let translateX = 0;

          switch (pos) {
            case 0:
              scale = 1;
              zIndex = 50;
              translateX = -180;
              filter = "drop-shadow(0 15px 20px rgba(0,0,0,0.3))";
              break;
            case 1:
            case -1:
              scale = 0.8;
              zIndex = 30;
              translateX = pos === 1 ? -0.1 : 1;
              filter = "brightness(0.6) blur(1px)";
              break;
            case 2:
            case -2:
              scale = 0.65;
              zIndex = 20;
              translateX = pos === 2 ? -20 : 160;
              filter = "brightness(0.4) blur(2px)";
              break;
            default:
              opacity = 0;
              zIndex = 0;
              break;
          }

          style = {
            ...style,
            transform: `scale(${scale}) translateX(${translateX}px)`,
            zIndex,
            opacity,
            filter,
          };
          const isCenter = pos === 0;
          return (
            <SwiperSlide key={index} style={style} className="-left-30">
              <div
                className="relative rounded-[13px] overflow-hidden"
                style={{
                  width: isCenter ? "880px" : "558px",
                  height: isCenter ? "577px" : "578px",
                  transition: "all 0.5s ease",
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {isCenter && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play
                        width={51}
                        height={60}
                        strokeWidth={1}
                        color="#fff"
                      />
                    </div>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold drop-shadow-md">
                      ՆԱԽԱԳԾԻ ԱՆՎԱՆՈՒՄԸ
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={slidePrev}
          aria-label="Previous Slide"
          className="text-[#781214] text-3xl hover:opacity-80 transition"
          type="button"
        >
          <ChevronLeft width={22} hanging={39} />
        </button>
        <button
          onClick={slideNext}
          aria-label="Next Slide"
          className="text-[#781214] text-3xl hover:opacity-80 transition"
          type="button"
        >
          <ChevronRight width={22} hanging={39} />
        </button>
      </div>
    </div>
  );
};
