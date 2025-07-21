"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container, Title } from "./ui";
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
    <Container className={cn("flex flex-col justify-center gap-10", className)}>
      <Title
        size="m"
        text="ՃԱՆԱՉԵՆՔ ՀԱՅԱՍՏԱՆԸ"
        className="text-center text-primary md:text-left text-4xl md:text-5xl"
      />

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
            name={"ՀՀ ԵՎ ԱՐՑԱԽ"}
            monumentsCount={24}
            monumentsCountText="պատմամշակութային կոթող"
            area={2704}
            population={103589}
            cities={5}
            villages={57}
            shortAbout={
              "Տավուշի մարզը գտնվում է։ Ընդգրկում է Իջևանի, Տավուշի, Նոյեմբերյանի, Դիլիջանի տարածաշրջանները: Մարզը հյուսիսում սահմանակից է "
            }
          />
        </div>
      </div>
    </Container>
  );
};
