import React from "react";
import { cn } from "@/lib/utils";
import { VideoLibrary } from "@/components";

interface Props {
  className?: string;
}

const VideoLibraryPage: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <VideoLibrary />
    </div>
  );
};

export default VideoLibraryPage;
