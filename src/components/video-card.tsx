import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./ui";
import Link from "next/link";
import { MapPin, Play } from "lucide-react";

interface Props {
  className?: string;
  place?: string;
  title: string;
  videoUrl: string;
}

export const VideoCard: React.FC<Props> = (props) => {
  const { className, place, title, videoUrl } = props;

  return (
    <div className={cn("", className)}>
      <Container>
        <Link href={"#"}>
          <div className="w-[342px] h-[268px] flex flex-col gap-4">
            <video
              src={videoUrl}
              controls
              className="w-[342px] h-[202px] rounded-[8px] object-cover"
            />
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-[16px] leading-[150%]">
                {title}
              </span>
              {place && (
                <span className="flex gap-1 text-[14px] leading-[143%]">
                  <MapPin size={16} /> {place}
                </span>
              )}
            </div>
          </div>
        </Link>
      </Container>
    </div>
  );
};
