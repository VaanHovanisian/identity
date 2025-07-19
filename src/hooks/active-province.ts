import { OptionsProvince } from "@/constants/map";
import React from "react";
export const useActiveProvince = () => {
  const [selectedProvince, setSelectedProvince] =
    React.useState<string>("tavush");

  const isActiveProvince = (el: OptionsProvince) => {
    return selectedProvince === el.id ||
      (selectedProvince === "1" && !el.fill) ||
      (selectedProvince === "2" && el.id !== "arcax" && !el.fill)
      ? "#581718"
      : el.fill
      ? "#fff"
      : "#781214";
  };
  return {
    setSelectedProvince,
    isActiveProvince,
    selectedProvince
  };
};
