import { cn } from "@/lib/utils";
import React from "react";

type TitleSizees = "l" | "m" | "s" | "n";

interface Props {
  className?: string;
  size: TitleSizees;
  text: string;
}

export const Title: React.FC<Props> = (props) => {
  const { className, size, text } = props;

  const setMapTag = {
    l: "h1",
    m: "h2",
    s: "h3",
    n: "h2",
  };

  const setMapSize = {
    l: "text-[64px]",
    m: "text-[48px]",
    s: "text-[36px]",
    n: "text-[clamp(1.875rem,-0.7813rem+8.5vw,4rem)]",
  };

  return React.createElement(
    setMapTag[size],
    { className: cn(setMapSize[size], className) },
    text
  );
};
