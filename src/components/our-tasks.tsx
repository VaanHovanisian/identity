import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { LogoSign } from "./logo-sign";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { FadeInSection } from "./fade-in-section"; // <-- Make sure you import this

interface Props {
  className?: string;
}

export const OurTasks: React.FC<Props> = (props) => {
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
      setActiveCategory("ՄԵՐ ԱՆԵԼԻՔՆԵՐԸ");
    }
  }, [intersection?.isIntersecting]);

  return (
    <FadeInSection>
      <div
        ref={intersectionRef}
        id="ՄԵՐ ԱՆԵԼԻՔՆԵՐԸ"
        className={cn("flex flex-col gap-8", className)}
      >
        <Title
          className="text-[clamp(1.5rem, 2vw + 1rem, 2.5rem)] leading-1.2"
          size={"m"}
          text={"ՄԵՐ ԱՆԵԼԻՔՆԵՐԸ"}
        />
        <ul className="bg-[rgba(239,239,239,0.2)] space-y-8 py-5 px-8">
          <li className="flex items-center gap-2 ">
            <LogoSign color={"#781214"} />
            <p className="text-[21px] leading-[120%] tracking-[0.03em] text-[#1e1e1e]">
              Ստեղծում ենք բարձրորակ տեսանյութեր և տարածում տարբեր մեդիա
              հարթակներով
            </p>
          </li>
          <li className="flex items-center gap-3">
            <LogoSign color={"#781214"} />
            <p className="text-[21px] leading-[120%] tracking-[0.03em] text-[#1e1e1e]">
              Մասնագիտացված թվային գործիքներով չափում ենք տարածման ազդեցությունը
            </p>
          </li>
        </ul>
        <div className="p-3 bg-primary mt-4">
          <p className="text-white font-semibold text-[21px] leading-[130%] tracking-[0.03em] text-center">
            Ձեր նվիրաբերության շնորհիվ կստեղծվի մնայուն ժառանգություն հաջորդ
            սերունդների համար։
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};
