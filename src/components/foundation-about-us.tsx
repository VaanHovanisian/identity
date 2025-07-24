"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  AboutUs,
  Leaders,
  Supporters,
  Team,
  VideoCard,
  OurTasks,
  Topics,
  Project,
} from "./";
import Link from "next/link";
import { useCategoryStore } from "@/store/category";
import { Container } from "./ui";
import { useVideoPosts } from "@/hooks/video-posts";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
}

const categories = [
  { name: "ՄԵՐ ՄԱՍԻՆ", id: 1 },
  { name: "ՀՈԳԱԲԱՐՁՈՒՆԵՐԻ ԽՈՐՀՈՒՐԴ", id: 3 },
  { name: "ԹԻՄԸ", id: 4 },
  { name: "ԱՋԱԿԻՑՆԵՐ", id: 5 },
  { name: "ՆԱԽԱԳԻԾ", id: 6 },
  { name: "ՄԵՐ ԱՆԵԼԻՔՆԵՐԸ", id: 7 },
  { name: "ԹԵՄԱՆԵՐ", id: 8 },
];

const sectionComponents = [
  AboutUs,
  Leaders,
  Team,
  Supporters,
  Project,
  OurTasks,
  Topics,
];

export const FoundationAboutUs: React.FC<Props> = ({ className }) => {
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const { data } = useVideoPosts();

  const [expandedSections, setExpandedSections] = useState<number[]>(
    categories.map((_, index) => index)
  );

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Container
      className={cn(
        "flex flex-col xl:flex-row justify-between gap-6",
        className
      )}
    >
      <div className="hidden xl:flex items-start">
        <ul className="sticky top-33 flex flex-col gap-4 text-start border-r border-border">
          {categories.map((item) => (
            <li
              key={item.id}
              className={cn(
                "pr-2",
                item.name === activeCategory &&
                  "mr-[-1px] border-r-2 border-r-primary pr-[11px]"
              )}
            >
              <Link
                href={`#${item.name}`}
                className={cn(
                  "font-medium text-[14px] leading-[171%] tracking-[0.04em]",
                  item.name === activeCategory && "text-primary"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[780px] w-full">
        {categories.map((item, index) => {
          const Section = sectionComponents[index];

          if (!Section) return null;

          const isOpen = expandedSections.includes(index);

          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div
              key={item.id}
              id={item.name}
              ref={ref}
              className={cn(
                "mb-8 transition-all duration-700 ease-out transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6"
              )}
            >
              <div className="xl:hidden flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <button
                  onClick={() => toggleSection(index)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.name}-content`}
                >
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <div
                id={`${item.name}-content`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out xl:block",
                  isOpen ? "max-h-[2500px]" : "max-h-0"
                )}
              >
                <Section />
              </div>

              {index < categories.length - 1 && <hr className="mt-11" />}
            </div>
          );
        })}
      </div>

      <div className="hidden xl:block">
        <VideoCard title={data?.[0]?.title} videoUrl={data?.[0]?.video} />
      </div>
    </Container>
  );
};
