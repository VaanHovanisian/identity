import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const ModalVideo: React.FC<Props> = (props) => {
  const { className, children } = props;
  return (
    <Dialog>
      <DialogOverlay className="bg-black/70" />
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn("h-[70%] sm:max-w-screen-md p-0 text-white", className)}
      >
        <DialogTitle className="hidden" />
        <div className="video-container">
          <iframe
            className="video"
            width="100%"
            height="100%"
            src="https://youtube.com/embed/2hw1VcMyuWI?si=f6RDIh-UWR63WSji?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};
