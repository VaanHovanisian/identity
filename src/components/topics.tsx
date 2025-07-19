import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { Why } from "./why";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { FadeInSection } from "./fade-in-section"; // import FadeInSection

interface Props {
  className?: string;
}

const why = [
  {
    number: "1",
    text1: "ՄՇԱԿՈՒԹԱՅԻՆ ՀՈՒՇԱՐՁԱՆՆԵՐ",
    text2: "բերդեր, խաչքարեր",
  },
  {
    number: "2",
    text1: "ՎԱՆՔԵՐ ԵՎ ԵԿԵՂԵՑԻՆԵՐ",
    text2: "",
  },
  {
    number: "3",
    text1: "ՊԱՏՄՈՒԹՅՈՒՆ",
    text2: "Դեպքեր, անձեր, վերլուծություն",
  },
  {
    number: "4",
    text1: "ԱԶԳԱԳՐՈՒԹՅՈՒՆ",
    text2: "Երգ, պար երաժշտություն",
  },
  {
    number: "5",
    text1: "ԱՎԱՆԴՈՒՅԹՆԵՐ",
    text2: "Տոներ, ծեսեր, խաղեր",
  },
  {
    number: "6",
    text1: "ՀԱՄԱՅՆՔՆԵՐ",
    text2: "Ապրելակերպ, տեսարժան վայրեր",
  },
  {
    number: "7",
    text1: "ԱՐՑԱԽՈՒՄ",
    text2:
      "մեր թիմի անդամների կողմից նկարահանած և դաշտում առկա տեսանյութերի հավաքագրում, մշակում և ներկայացում։",
  },
];

export const Topics: React.FC<Props> = (props) => {
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
      setActiveCategory("ԹԵՄԱՆԵՐ");
    }
  }, [intersection?.isIntersecting]);

  return (
    <FadeInSection>
      <div
        ref={intersectionRef}
        id="ԹԵՄԱՆԵՐ"
        className={cn("flex flex-col gap-5", className)}
      >
        <Title
          className="text-center font-bebas leading-[140%] tracking-[0.03em]"
          size={"m"}
          text={"ԹԵՄԱՆԵՐ"}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[35px] my-[8%] mb-[80px]">
          {why.map((el) => (
            <li key={el.number} className="w-full">
              <Why
                text1Style="mt-5 font-bebas text-[32px] font-semibold leading-[90%] tracking-[0.03em] text-primary"
                text2Style="text-[18px] leading-[290%] tracking-[0.03em] text-[#1e1e1e]"
                number={el.number}
                text1={el.text1}
                text2={el.text2}
              />
            </li>
          ))}
        </ul>

        <div className="relative flex justify-center mx-auto mt-15 rounded-[9px] items-center text-center max-w-[510px] min-h-[72px] border border-primary px-4 sm:px-8">
          <p className="relative z-50 text-primary font-bold text-[18px] leading-[120%] tracking-[0.03em]">
            Ստեղծված տեսանյութերը թարգմանելու և տարածելու ենք մի քանի
            լեզուներով։
          </p>
          <img
            className="absolute left-[39%] bottom-6 hidden sm:block"
            src="/commas.png"
            alt="commas"
          />
        </div>

        <div className="grid grid-cols-2 my-8 mx-auto gap-2">
          <div className="flex flex-col gap-4 items-center justify-center">
            <img src="/we1.png" alt="we" />
            <img src="/we2.png" alt="we" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/we3.png" alt="we" />
          </div>
        </div>

        <div className="max-w-full sm:max-w-[661px] w-full py-5 px-4 sm:px-25 mx-auto bg-primary mt-4 rounded-md">
          <p className="text-white font-semibold text-[18px] sm:text-[21px] leading-[130%] tracking-[0.03em] text-center">
            Քանի դեռ մենք չենք գործում` ժամանակն աշխատում է մեր դեմ։
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};
