"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./ui";
import { AboutProvince } from "./about-province";
import { options } from "@/constants/map";
import { useActiveProvince } from "@/hooks/active-province";
import { MapButtons } from "./map-buttons";
import { useAboutProvince } from "@/hooks/about-province";

interface Props {
  className?: string;
}

export const Map: React.FC<Props> = ({ className }) => {
  const { isActiveProvince, setSelectedProvince, selectedProvince } =
    useActiveProvince();
  const { data } = useAboutProvince();

  return (
    <Container
      className={cn(
        "flex flex-col justify-center items-center gap-10",
        className
      )}
    >
      <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[125%] text-center text-primary font-semibold">
        ՃԱՆԱՉԵՆՔ ՀԱՅԱՍՏԱՆԸ
      </h2>

      <MapButtons
        selectedProvince={selectedProvince}
        setSelectedProvince={setSelectedProvince}
      />

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1440px]">
        <div className="w-full lg:w-1/2 max-w-full aspect-[677/530]">
          <svg
            viewBox="0 0 677 530"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            {options.map((el, index) => (
              <path
                key={index}
                id={el.id || ""}
                d={el.d || ""}
                fillRule="evenodd"
                clipRule="evenodd"
                fill={isActiveProvince(el)}
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
                onClick={() => setSelectedProvince(el.id || "")}
                className={cn("duration-300 hover:h-[110%] hover:w-[110%]", {
                  scal: selectedProvince === el.id,
                })}
              />
            ))}
          </svg>
        </div>

        <div className="w-full lg:w-1/2">
          <AboutProvince
            name={data?.[0]?.provinceName as string}
            monumentsCount={data?.[0]?.monuments as number}
            area={data?.[0]?.area as number}
            population={data?.[0]?.population as number}
            cities={data?.[0]?.cities as number}
            villages={data?.[0]?.villages as number}
            shortAbout={data?.[0]?.about as string}
          />
        </div>
      </div>
    </Container>
  );
};
