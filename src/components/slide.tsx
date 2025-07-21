import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Slide: React.FC<Props> = (props) => {
  const { className } = props;
  const [isPlay, setIsPlay] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlay(true);
  };
  return (
    <div className={cn("slider-ellipse__slide", className)}>
      <video
        ref={videoRef}
        className="tab__video h-full"
        controls
        onPlay={() => setIsPlay(true)}
        onPause={() => setIsPlay(false)}
        preload="none"
      >
        <source src="/ArtashAsatryan-Txuremtxur-1.mp4" type="video/mp4" />
      </video>
      {!isPlay && (
        <>
          <img
            className="slider-ellipse__slide-poster h-full"
            src="/sliderImg1.png"
            alt=""
            loading="lazy"
          />
          <svg
            onClick={handlePlay}
            width="51"
            height="60"
            viewBox="0 0 51 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L48.6667 30L2 58V2Z"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>ՆԱԽԱԳԾԻ ԱՆՎԱՆՈՒՄԸ</span>
        </>
      )}
    </div>
  );
};
