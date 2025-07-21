"use client";

import { Play } from "lucide-react";
import { Button } from "./ui";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTitle } from "@/hooks/title";
import { ModalVideo } from "./modal-video";

interface Props {
  className?: string;
}

export const HeaderImg: React.FC<Props> = (props) => {
  const { className } = props;
  const t = useTranslations("HeaderImg");
  const { data } = useTitle();

  return (
    <div
      className={cn(
        "h-screen mx-auto md:bg-[url(/Img.png)] bg-[url(/header-small-img.png)] bg-cover bg-center mb-[10%] flex flex-col",
        className
      )}
    >
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center mx-auto max-w-[781px] gap-6">
          <h1 className="font-bebas text-[clamp(1.875rem,-0.7813rem+8.5vw,4rem)] text-white leading-[125%] text-center">
            ԻՆՔՆՈՒԹՅԱՆ ՍԱՐԴԱՐԱՊԱՏՈՒՄ ՀԱՂԹԱՆԱԿՆ ԱՅԼԸՆՏՐԱՆՔ ՉՈՒՆԻ
          </h1>
          <ModalVideo>
            <Button
              variant="destructive"
              className="group cursor-pointer hover:scale-110 flex items-center text-[20px] sm:text-2xl font-medium font-montserrat p-9"
            >
              <Play className="text-[#781214] group-hover:text-white mb-[1.5px]" />
              {t("buttonText")}
            </Button>
          </ModalVideo>
        </div>
      </div>
    </div>
  );
};
