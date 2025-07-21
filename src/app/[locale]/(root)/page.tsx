import { HeaderImg, MostView, Map, LogoSlider } from "@/components";
import SliderEllipse from "@/components/ellipse-slider";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <HeaderImg />
      <SliderEllipse />
      <Map />
      <LogoSlider />
    </Suspense>
  );
}
