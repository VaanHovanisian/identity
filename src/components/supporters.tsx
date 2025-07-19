import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { FadeInSection } from "./fade-in-section"; // ✅ Import

interface Props {
  className?: string;
}

const supporterCompanies = [
  {
    img: "/supporter1.png",
    name: "Շվեյցարական համագործակցության գրասենյակն աջակցում է «ռեԱրմենիա ակադեմիա»-ի միջոցով",
  },
  {
    img: "/supporter2.png",
    name: "Welcome to it ընկերությունը անվճար կայքը պատրաստելու պատրաստակամություն է հայտնել",
  },
  {
    img: "/supporter3.png",
    name: "Printhouse1 կազմակերպությունը նախագծին աջակցում է տպագրական գործերում",
  },
  {
    img: "/supporter4.png",
    name: "Մարզերի երեխաները մարզերում ՀԿ-ի կամավորները օգնում են ընթացիկ գործերում",
  },
];

const supporters = [
  {
    img: "/supporters1.png",
    name: "Դավիթ Հակոբյան",
  },
  {
    img: "/supporters2.png",
    name: "Տիգրան Ներսիսյան",
  },
  {
    img: "/supporters3.png",
    name: "Արման Նավասարդյան",
  },
  {
    img: "/supporters4.png",
    name: "Դավիթ Ամալյան",
  },
  {
    img: "/supporters5.png",
    name: "Գուրգեն Մելիքյան",
  },
];

export const Supporters: React.FC<Props> = ({ className }) => {
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
      setActiveCategory("ԱՋԱԿԻՑՆԵՐ");
    }
  }, [intersection?.isIntersecting]);

  return (
    <FadeInSection>
      <div
        ref={intersectionRef}
        id="ԱՋԱԿԻՑՆԵՐ"
        className={cn("my-10", className)}
      >
        <Title
          className="font-bebas leading-[133%] text-primary text-start"
          size="m"
          text="Աջակիցներ"
        />

        <div className="flex flex-wrap items-center justify-between gap-6 my-20">
          {supporterCompanies.map((el, i) => (
            <div
              key={`company-${i}`}
              className="flex flex-col items-center text-center w-[130px] sm:w-[150px]"
            >
              <img
                className="w-[60px] sm:w-[85px] mb-2"
                src={el.img}
                alt={el.name}
              />
              <p className="text-[11px] sm:text-xs font-light leading-[120%]">
                {el.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 my-20">
          {supporters.map((el, i) => (
            <div
              key={`person-${i}`}
              className="flex flex-col items-center text-center w-[90px] sm:w-[100px]"
            >
              <img
                className="w-[60px] sm:w-[85px] mb-2"
                src={el.img}
                alt={el.name}
              />
              <p className="text-[13px] sm:text-base font-light leading-[120%]">
                {el.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 items-start">
          <img
            className="w-16 h-16 sm:max-w-[116px] sm:max-h-[116px] flex-shrink-0"
            src="/supporter.png"
            alt="supporter"
          />
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <p className="text-[22px] leading-[130%]">
              <span className="font-semibold">Գագիկ Գինոսյանը</span> միացավ
              նախագծին կյանքի վերջին ամիսներին։ Ի հիշատակ Գինոսյանի՝ նրա հետ
              միասին կազմած մեր ծրագրերը ինականացնելու ենք ավելի բարձր
              պատասխանատվությամբ։
            </p>
            <p className="text-primary text-[22px] leading-[130%] font-semibold">
              Ազգագրական պարերի մասին պատրաստելու ենք ուսուցողական հոլովակներ,
              որպեսզի ցանկացած հայ աշխարհի յուրաքանչյուր կետից իր ուզած պարը
              հեշտությամբ գտնելու և սովորելու հնարավորություն ունենա։
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};
