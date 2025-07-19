import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { LogoSign } from "./";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { FadeInSection } from "./fade-in-section";

interface Props {
  className?: string;
}

export const AboutUs: React.FC<Props> = (props) => {
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
      setActiveCategory("ՄԵՐ ՄԱՍԻՆ");
    }
  }, [intersection?.isIntersecting]);

  return (
    <div
      ref={intersectionRef}
      id="ՄԵՐ ՄԱՍԻՆ"
      className={cn("max-w-[680px] w-full flex flex-col gap-11", className)}
    >
      <FadeInSection>
        <Title
          className="font-bebas leading-[133%] text-primary text-start"
          size="m"
          text="ՄԵՐ ՄԱՍԻՆ"
        />
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col justify-center text-center gap-2">
          <LogoSign className="flex justify-center" color="#781214" />
          <span className="text-4xl text-primary">ԻՆՔՆՈՒԹՅՈՒՆ</span>
          <span className="text-primary">ՀԻՄՆԱԴՐԱՄ</span>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col text-center">
          <span className="text-[#343434]">
            <span className="font-semibold text-xl leading-[134%] tracking-[0.03em]">
              Նպատակ․
            </span>{" "}
            Ազգային արժեքների տարածում
          </span>
          <span className="text-[#343434]">
            <span className="font-semibold text-xl leading-[134%] tracking-[0.03em]">
              Գործիքներ․
            </span>{" "}
            Ժամանակակից մեդիա նախագծեր
          </span>
          <span className="text-[#343434]">
            <span className="font-semibold text-xl leading-[134%] tracking-[0.03em]">
              Թիմ․
            </span>{" "}
            Փորձառու թիմ
          </span>
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className="max-w-[556px] flex flex-col text-center mx-auto">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          <span>
            This classic filler text, known as "Lorem Ipsum", is used
            placeholder text design and publishing.
          </span>
        </p>
      </FadeInSection>
    </div>
  );
};
