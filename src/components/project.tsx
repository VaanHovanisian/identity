"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { LogoSign } from "./logo-sign";
import { Why } from "./why";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { useInView } from "react-intersection-observer";
import { OurTasks } from "./our-tasks";
import { Topics } from "./topics";
import { FadeInSection } from "./fade-in-section";

interface Props {
  className?: string;
}

export const Project: React.FC<Props> = (props) => {
  const { className } = props;
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);

  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.3,
    }
  );

  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory("ՆԱԽԱԳԻԾ");
    }
  }, [intersection?.isIntersecting]);

  const whyItems = [
    {
      number: "1",
      text1: "Ինչու՞",
      text2: "Մշակույթ",
      text: "Մշակույթը ձևավորում է ազգի ինքնությունը",
    },
    {
      number: "2",
      text1: "Ինչու՞",
      text2: "Տեսանյութեր",
      text: "Տեսանյութերը մշակույթի տարածման ամենաարդյունավետ միջոցն են",
    },
    {
      number: "3",
      text1: "Ինչու՞",
      text2: "Մենք",
      text: "Մենք ունենք անհրաժեշտ փորձն ու որոշել ենք նվիրվել այս գործին",
    },
    {
      number: "4",
      text1: "Ինչու՞",
      text2: "Հիմա",
      text: "Մեր ինքնությունը հերթական անգամ վտանգված է",
    },
  ];

  const cultureTexts = [
    "Չգիտենք մեր պատմությունն ու ավանդույթները",
    "Աղավաղում ենք լեզուն",
    "Մեր միջոցառումներին պարում ենք քրդական պարեր",
    "Լսում ենք մակերեսային արաբաթուրքական երաժշտություն",
  ];

  return (
    <div
      ref={intersectionRef}
      id="ՆԱԽԱԳԻԾ"
      className={cn("flex flex-col text-start gap-14", className)}
    >
      <FadeInSection>
        <Title
          size="m"
          text="ՆԱԽԱԳԻԾ"
          className="text-[clamp(1.5rem, 2vw + 1rem, 2.5rem)] leading-1.2"
        />
      </FadeInSection>

      <FadeInSection>
        <div className="relative flex flex-col items-start">
          <LogoSign
            className="opacity-30 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[164px] md:h-[164px]"
            color="#A7A7A7"
          />
          <div className="absolute left-0 top-2 sm:top-4 md:top-5">
            <p className="text-[18px] sm:text-[24px] md:text-[29px] font-semibold leading-tight">
              ԹԵՄԱՏԻԿ ՏԵՍԱՆՅՈՒԹԵՐ ՆԿԱՐԵԼՈՎ և ՏԱՐԱԾԵԼՈՎ
            </p>
            <p className="text-primary font-semibold text-[20px] sm:text-[26px] md:text-[32px] leading-tight">
              ՆՊԱՍՏՈՒՄ ԵՆՔ ՀԱՅ ՄՇԱԿՈՒՅԹԻ ՏԱՐԱԾՄԱՆԸ
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <img src="/project.png" alt="project" />
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col gap-10">
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-between gap-4"
            >
              {whyItems
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((item, index) => (
                  <FadeInSection key={index}>
                    <Why
                      textStyle="w-[245px] text-[17px] leading-[136%] -tracking-[0.02em] text-[#424242]"
                      text1Style="text-[32px]"
                      text2Style="text-primary text-[42px] font-bold"
                      number={item.number}
                      text={item.text}
                      text1={item.text1}
                      text2={item.text2}
                    />
                  </FadeInSection>
                ))}
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[140%] tracking-[0.03em]">
          ՄԵՐ ԻՆՔՆՈՒԹՅՈՒՆԸ ՀԵՐԹԱԿԱՆ ԱԱՆԳԱՄ ՎՏԱՆԳՎԱԾ Է, ՈՐՈՎՀԵՏԵՎ ՀԵՌԱՑԵԼ ԵՆՔ ՄԵՐ
          ՄՇԱԿՈՒՐԹԻՑ
        </p>
      </FadeInSection>

      <FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 px-4 sm:px-0 w-full max-w-[360px] sm:max-w-none mx-auto">
          {cultureTexts.map((text, index) => (
            <FadeInSection key={index}>
              <div className="relative w-full max-w-[140px] sm:max-w-[160px] aspect-square mx-auto">
                <LogoSign
                  className="opacity-30 w-full h-full"
                  color="#A7A7A7"
                />
                <p className="absolute inset-0 flex items-center justify-center px-2 text-center text-[13px] sm:text-[16px] text-primary font-semibold leading-tight break-words">
                  {text}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="relative flex justify-center mx-auto mt-15 rounded-[9px] items-center text-center max-w-[510px] min-h-[72px] border-1 border-primary">
          <p className="relative z-50 text-primary font-bold text-[18px] leading-[120%] tracking-[0.03em]">
            Ինքնությունը պահելու լավագույն ձևը դրա լիարժեք կրողը դառնալն է։
          </p>
          <img
            className="absolute left-[39%] bottom-6"
            src="/commas.png"
            alt="commas"
          />
        </div>
      </FadeInSection>
    </div>
  );
};
