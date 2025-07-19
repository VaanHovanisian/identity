import React from "react";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

interface Props {
  className?: string;
  videoUrl: string;
  date: string;
  dateAgo: string;
  title: string;
  desc: string;
}

export const Updates: React.FC<Props> = (props) => {
  const { className, videoUrl, date, dateAgo, title, desc } = props;
  return (
    <div className={cn("flex gap-4", className)}>
      <video
        src={videoUrl}
        controls
        className="w-[342px] h-[202px] rounded-[8px] object-cover"
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="flex gap-2 items-center text-[14px] leading-[143%]">
            <CalendarDays />
            {date}
          </span>
          {" | "}
          <span className="text-[14px] leading-[143%]">
            {dateAgo} months ago
          </span>
        </div>
        <span className="text-[16px] font-semibold leading-[150%]">
          {title}
        </span>
        <p className="text-[14px] leading-[171%]">{desc}</p>
      </div>
    </div>
  );
};
