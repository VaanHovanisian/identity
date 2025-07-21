import React from "react";
import { cn } from "@/lib/utils";
import { options } from "@/constants/map";
import { Button } from "./ui";

interface Props {
  className?: string;
  selectedProvince: string;
  setSelectedProvince: (value: string) => void;
}

export const MapButtons: React.FC<Props> = (props) => {
  const { className, selectedProvince, setSelectedProvince } = props;

  return (
    <ul className={cn("flex gap-2 overflow-auto py-8", className)}>
      {options
        .filter((el) => el.id)
        .map((el) => (
          <li key={el.id}>
            <Button
              onClick={() => setSelectedProvince(el.id || "")}
              className={cn(
                "border border-black focus:border-primary focus:text-white",
                selectedProvince === el.id ? "text-white" : "text-black"
              )}
              variant={`${
                selectedProvince === el.id ? "default" : "destructive"
              }`}
            >
              {el.name}
            </Button>
          </li>
        ))}
    </ul>
  );
};
