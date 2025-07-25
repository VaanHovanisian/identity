"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button, Title } from "./ui";
import { ArrowRight, ChartPie, MapPinned, UserRound } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

interface Props {
  className?: string;
  name: string;
  monumentsCount: number;
  monumentsCountText: string;
  area: number;
  population: number;
  cities: number;
  villages: number;
  shortAbout: string;
}

export const AboutProvince: React.FC<Props> = (props) => {
  const {
    className,
    name,
    monumentsCount,
    monumentsCountText,
    area,
    population,
    cities,
    villages,
    shortAbout,
  } = props;

  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className={cn("space-y-4", className)}>
      <Title
        size={"m"}
        text={name}
        className="text-left text-primary text-4xl mb-9 md:text-5xl"
      />
      <div className="flex items-center gap-4 text-[20px] sm:text-2xl font-semibold">
        <Title
          size={"s"}
          text={String(monumentsCount)}
          className="text-primary text-start font-bebas leading-[133%]"
        />
        <p className="text-[clamp(1rem,5vw,1.5rem)]">{monumentsCountText}</p>
      </div>
      <div className="flex gap-3 sm:gap-10 items-center">
        <div className="flex gap-2 items-center">
          <ChartPie size={34} strokeWidth={3} />
          <span className="font-extrabold text-[14px] leading-[171%] tracking-[0.04em]">
            {area} քԿմ
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-center">
            <div className="flex">
              <UserRound size={17} strokeWidth={3} />
              <UserRound size={17} strokeWidth={3} />
            </div>
            <div className="flex">
              <UserRound size={17} strokeWidth={3} />
              <UserRound size={17} strokeWidth={3} />
            </div>
          </div>
          <span className="font-extrabold text-[14px] leading-[171%] tracking-[0.04em]">
            {population}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <MapPinned size={34} strokeWidth={3} />
          <span className="font-extrabold text-[14px] leading-[171%] tracking-[0.04em]">
            {cities} քաղաք, {villages} գյուղ
          </span>
        </div>
      </div>
      <div className={cn("flex flex-col gap-4 items-start")}>
        <p className="leading-[150%]">
          {name} մարզը գտնվում է։ {showMore ? shortAbout : " ... "}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-primary underline cursor-pointer"
          >
            {showMore ? "Փակել" : "Իմանալ ավելին"}
          </button>
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <video
                className="tab__video h-full"
                poster="/sliderImg1.png"
                controls
                preload="none"
              >
                <source
                  src="/ArtashAsatryan-Txuremtxur-1.mp4"
                  type="video/mp4"
                />
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Button
        className="group relative border border-primary flex items-center"
        variant={"destructive"}
      >
        <Link className="absolute inset-0" href="/video-section" />
        ԱՆՑՆԵԼ ՏԵՍԱԴԱՐԱՆ{" "}
        <ArrowRight className="text-[#781214] group-hover:text-white mb-[1.5px]" />
      </Button>
    </div>
  );
};
export const Team: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Title size={"s"} text={""} />
    </div>
  );
};
