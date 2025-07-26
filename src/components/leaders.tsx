import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { FadeInSection } from "./fade-in-section";

interface Props {
  className?: string;
}

export const Leaders: React.FC<Props> = ({ className }) => {
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
      setActiveCategory("ՀՈԳԱԲԱՐՁՈՒՆԵՐԻ ԽՈՐՀՈՒՐԴ");
    }
  }, [intersection?.isIntersecting]);

  const firstLeaders = [
    {
      img: "/lead1.png",
      name: "Սևակ Խաչատրյան",
      title: "Հոգեբարձուների խորհրդի նախագահ",
      desc: "«Արցախ Կարպետ» ընկերության հիմնադիր",
    },
    {
      img: "/lead2.png",
      name: "Տեր Աբել քահանա Քարտաշյան",
      title: "Խորհրդի անդամ",
      desc: "Իջևանի Սուրբ Ամենափրկիչ եկեղեցու հոգևոր հովիվ",
    },
    {
      img: "/lead3.png",
      name: "Անի Մանուկյան",
      title: "Խորհրդի անդամ",
      desc: "Ֆրանսիայում «Արմատ» կրթօջախի հիմնադիր",
    },
     {
      img: "/lead4.png",
      name: "Հասմիկ Բաղդասարյան",
      title: "Խորհրդի անդամ",
      desc: "Երգչուհի (սոպրանո)",
    },
    {
      img: "/lead5.png",
      name: "Արման Դավթյան (Նուռ)",
      title: "Խորհրդի անդամ",
      desc: "«Նուռ Դիզայն» ստուդիայի և «Նուռ Արթ Գալլերի» ցուցասրահի հիմնադիր",
    },
  ];

  return (
    <div
      ref={intersectionRef}
      id="ՀՈԳԱԲԱՐՁՈՒՆԵՐԻ ԽՈՐՀՈՒՐԴ"
      className={cn("max-w-[680px] w-full flex flex-col", className)}
    >
      <FadeInSection>
        <Title
          className="text-[#781214] text-[clamp(1.5rem, 2vw + 1rem, 2.5rem)] leading-1.2"
          size="m"
          text="ՀՈԳԱԲԱՐՁՈՒՆԵՐԻ ԽՈՐՀՈՒՐԴ"
        />
      </FadeInSection>

      <FadeInSection>
        <div className="grid foundation-first-grid gap-6">
          {firstLeaders.map((person, idx) => (
            <div
              key={idx}
              className="flex flex-col  items-center gap-4 text-center"
            >
              <img
                className="max-w-[135px] w-full"
                src={person.img}
                alt={`lead${idx + 1}`}
              />
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-xs leading-[120%] tracking-[0.03em]">
                  {person.name}
                </span>
                <span className="text-[11px] text-primary">{person.title}</span>
              </div>
              <span className="max-w-[180px] w-full text-[11px] leading-[113%] text-[#191717]">
                {person.desc}
              </span>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};
