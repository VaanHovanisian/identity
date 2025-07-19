import { HeaderImg, MostView, Map, LogoSlider } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <HeaderImg />
      <MostView />
      <Map />
      <LogoSlider />
    </Suspense>
  );
}
