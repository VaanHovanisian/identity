import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  textStyle?: string;
  text1Style: string;
  text2Style: string;
  number: string;
  text?: string;
  text1: string;
  text2: string;
}

export const Why: React.FC<Props> = (props) => {
  const {
    className,
    number,
    text,
    text1,
    text2,
    textStyle,
    text1Style,
    text2Style,
  } = props;

  return (
    <div className={cn("max-w-[245px] flex flex-col gap-2", className)}>
      <div className="grid grid-cols-[auto_1fr]">
        <span className="font-bold text-[64px] sm:text-[96px] md:text-[127px] text-[#f1f1f1] leading-none">
          {number}
        </span>

        <div
          className={cn(
            "flex flex-col justify-center -ml-6 sm:-ml-10 md:-ml-14",
            text1Style
          )}
        >
          {text1}
          <span className={cn("", text2Style)}>{text2}</span>
        </div>
      </div>

      {text && <p className={cn("text-sm sm:text-base", textStyle)}>{text}</p>}
    </div>
  );
};
