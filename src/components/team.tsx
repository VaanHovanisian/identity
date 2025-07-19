import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./ui";
import { useCategoryStore } from "@/store/category";
import { useIntersection } from "react-use";

interface Props {
  className?: string;
}

const teamMembersTop = [
  {
    name: "Գագիկ Հարությունյան",
    role: "Հիմնադիր, տնօրեն",
    img: "/team-member1.png",
    margin: "mt-33",
  },
  {
    name: "Առնոլդ Ղազարյան",
    role: "Օպերատոր",
    img: "/team-member2.png",
    margin: "mt-22",
  },
  {
    name: "Մարիամ Բաղդասարյան",
    role: "Մենտաժող",
    img: "/team-member3.png",
    margin: "mt-10",
  },
  {
    name: "Կարեն Հարությունյան",
    role: "Ծրագրավորող",
    img: "/team-member4.png",
    margin: "mt-22",
  },
  {
    name: "Պավել Տերտերյան",
    role: "Մոնտաժող",
    img: "/team-member5.png",
    margin: "mt-33",
  },
];

const teamMembersMiddle = [
  {
    name: "Գայանե Հարությունյան",
    role: "Թարգմանիչ",
    img: "/team-member6.png",
  },
  {
    name: "Նելսոն Ասլանյան",
    role: "Օպերատոր",
    img: "/team-member7.png",
  },
  {
    name: "Լուսինե Գրիգորյան",
    role: "Թարգմանիչ",
    img: "/team-member8.png",
  },
];

const teamMembersBottom = [
  {
    name: "Լենա Թևոսյան",
    role: "Կամավոր",
    img: "/team-member9.png",
    margin: "mt-0",
  },
  {
    name: "Արմինե Գրիգորյան",
    role: "Դիզայներ",
    img: "/team-member10.png",
    margin: "mt-7",
  },
  {
    name: "Վարդուհի Հարությունյան",
    role: "Մենտաժող",
    img: "/team-member11.png",
    margin: "mt-15",
  },
  {
    name: "Ռուզան Խաչատրյան",
    role: "Ռեժիսոր",
    img: "/team-member12.png",
    margin: "mt-7",
  },
  {
    name: "Փառանձեմ Մանուկյան",
    role: "Կամավոր",
    img: "/team-member13.png",
    margin: "mt-0",
  },
];

export const Team: React.FC<Props> = ({ className }) => {
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
      setActiveCategory("ԹԻՄԸ");
    }
  }, [intersection?.isIntersecting]);

  return (
    <div
      ref={intersectionRef}
      id="ԹԻՄԸ"
      className={cn("flex flex-col gap-6 mb-15", className)}
    >
      <Title
        className="font-bebas leading-[133%] text-primary text-start my-22"
        size="m"
        text="Թիմը"
      />
      <div className="flex justify-center">
        {teamMembersTop.map((member, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col  items-center gap-3 text-center ",
              member.margin
            )}
          >
            <img
              className="max-w-[126px] w-full"
              src={member.img}
              alt={member.name}
            />
            <span className="text-[12px]">{member.name}</span>
            <span className="text-[8px] font-semibold leading-[113%]">
              {member.role}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {teamMembersMiddle.map((member, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col justify-center items-center gap-3 text-center"
            )}
          >
            <img
              className="max-w-[126px] w-full"
              src={member.img}
              alt={member.name}
            />
            <span className="text-[12px]">{member.name}</span>
            <span className="text-[8px] font-semibold leading-[113%]">
              {member.role}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {teamMembersBottom.map((member, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col  items-center gap-3 text-center ",
              member.margin
            )}
          >
            <img
              className="max-w-[126px] w-full"
              src={member.img}
              alt={member.name}
            />
            <span className="text-[12px]">{member.name}</span>
            <span className="text-[8px] font-semibold leading-[113%]">
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
