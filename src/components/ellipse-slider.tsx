"use client";

import { useEffect, useRef, useState } from "react";

import "./ellipse-slider.css";
import { Container, Title } from "./ui";
import { cn } from "@/lib/utils";
import { Slide } from "./slide";
const EllipseSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<NodeListOf<HTMLDivElement>>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const navPrevRef = useRef<HTMLButtonElement>(null);
  const navNextRef = useRef<HTMLButtonElement>(null);

  const [activeOrder, setActiveOrder] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    slidesRef.current = container.querySelectorAll<HTMLDivElement>(
      ".slider-ellipse__slide"
    );

    if (!slidesRef.current) return;

    slidesRef.current.forEach((slide, i) => {
      slide.dataset.order = i.toString();
      slide.addEventListener("click", () => {
        setActiveOrder(i);
      });
    });

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);

    window.addEventListener("resize", update);

    setActiveOrder(Math.floor(slidesRef.current.length / 2));
    update();

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    update();
    setPagination();
  }, [activeOrder]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const threshold = 50;
    const distance = touchEndX.current - touchStartX.current;

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        setActiveOrder(
          (prev) =>
            (prev - 1 + slidesRef.current!.length) % slidesRef.current!.length
        );
      } else {
        setActiveOrder((prev) => (prev + 1) % slidesRef.current!.length);
      }
    }
  };

  const update = () => {
    if (!slidesRef.current || !containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const a = width / 2;
    const b = height / 2;
    const delta = Math.PI / slidesRef.current.length / 3;

    slidesRef.current.forEach((_, i) => {
      const leftSlide = containerRef.current!.querySelector<HTMLDivElement>(
        `[data-order="${activeOrder - i}"]`
      );
      const rightSlide = containerRef.current!.querySelector<HTMLDivElement>(
        `[data-order="${activeOrder + i}"]`
      );

      [leftSlide, rightSlide].forEach((slide, idx) => {
        if (!slide) return;
        slide.style.zIndex = `${slidesRef.current!.length - i}`;
        slide.style.opacity = `${1 - (3 * i) / slidesRef.current!.length}`;
        slide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + (idx === 0 ? -1 : 1) * delta * i * 2)}px`;
        slide.style.top = `${-b * Math.sin((Math.PI * 3) / 2)}px`;
        slide.style.transform = `translate(-50%, -50%) scale(${1 - (1 * i) / slidesRef.current!.length})`;
      });
    });
  };
  const setPagination = () => {
    if (!paginationRef.current || !slidesRef.current) return;

    const buttons = paginationRef.current.querySelectorAll<HTMLButtonElement>(
      ".slider-ellipse__pagination-button"
    );

    const len = buttons.length;

    buttons.forEach((btn, i) => {
      btn.classList.toggle(
        "slider-ellipse__pagination-button_active",
        i === activeOrder
      );

      const distance = Math.abs(i - activeOrder);
      const maxDistance = Math.floor(len / 2);

      // Чем дальше от активного — тем меньше scale
      const scale =
        distance === 0 ? 1 : Math.max(0.6, 1 - (distance / maxDistance) * 0.4);

      btn.style.transform = `scale(${scale})`;
    });
  };

  const handleNav = (dir: "prev" | "next") => {
    if (!slidesRef.current) return;
    if (dir === "prev") {
      setActiveOrder(
        (prev) =>
          (prev - 1 + slidesRef.current!.length) % slidesRef.current!.length
      );
    } else {
      setActiveOrder((prev) => (prev + 1) % slidesRef.current!.length);
    }
  };

  return (
    <Container className="mb-24">
      <Title
        className="text-center text-primary md:text-left text-4xl mb-9 md:text-5xl"
        text="ԱՄԵՆԱՇԱՏ ԴԻՏՎԱԾ"
        size="m"
      />
      <div className="slider-ellipse" ref={sliderRef}>
        <div className="slider-ellipse__container" ref={containerRef}>
          {/* Слайды */}
          {[...Array(7)].map((_, i) => (
            <Slide key={i} className="slider-ellipse__slide" />
          ))}
        </div>

        <div className="slider-ellipse__pagination" ref={paginationRef}>
          {[...Array(7)].map((_, i) => (
            <button
              key={i}
              data-order={i}
              className={cn("slider-ellipse__pagination-button")}
              onClick={() => setActiveOrder(i)}
            />
          ))}
        </div>
        <div className="slider-ellipse__navigation">
          <button
            className="slider-navigation action-prev"
            onClick={() => handleNav("prev")}
            data-dir="prev"
          >
            <svg
              width="22"
              height="39"
              viewBox="0 0 22 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5471 33.8814C21.0078 34.3485 21.2667 34.982 21.2667 35.6426C21.2667 36.3032 21.0078 36.9367 20.5471 37.4038C20.0863 37.8709 19.4614 38.1333 18.8098 38.1333C18.1581 38.1333 17.5332 37.8709 17.0725 37.4038L0.72138 20.8279C0.492727 20.5969 0.311304 20.3224 0.187513 20.0202C0.0637222 19.7179 0 19.3939 0 19.0667C0 18.7394 0.0637222 18.4154 0.187513 18.1132C0.311304 17.8109 0.492727 17.5365 0.72138 17.3055L17.0725 0.729511C17.5332 0.262413 18.1581 -9.84335e-09 18.8098 0C19.4614 9.84336e-09 20.0863 0.262413 20.5471 0.729511C21.0078 1.19661 21.2667 1.83013 21.2667 2.49071C21.2667 3.15128 21.0078 3.7848 20.5471 4.2519L5.93533 19.0646L20.5471 33.8814Z"
                fill="#781214"
              />
            </svg>
          </button>
          <button
            className="slider-navigation action-next"
            onClick={() => handleNav("next")}
            data-dir="next"
          >
            <svg
              width="22"
              height="39"
              viewBox="0 0 22 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2767 20.8279L4.92721 37.4038C4.46649 37.8709 3.84163 38.1333 3.19008 38.1333C2.53852 38.1333 1.91366 37.8709 1.45294 37.4038C0.992226 36.9367 0.733398 36.3032 0.733398 35.6426C0.733398 34.982 0.992226 34.3485 1.45294 33.8814L16.0673 19.0687L1.45703 4.2519C1.22891 4.02062 1.04795 3.74605 0.924489 3.44386C0.801029 3.14167 0.737485 2.81779 0.737485 2.49071C0.737485 2.16362 0.801029 1.83974 0.924489 1.53755C1.04795 1.23537 1.22891 0.960795 1.45703 0.729511C1.68515 0.498228 1.95598 0.314764 2.25403 0.189594C2.55209 0.0644243 2.87155 -2.43697e-09 3.19416 0C3.51678 2.43697e-09 3.83624 0.0644243 4.13429 0.189594C4.43235 0.314764 4.70318 0.498228 4.9313 0.729511L21.2808 17.3055C21.5092 17.5367 21.6902 17.8114 21.8137 18.1138C21.9371 18.4162 22.0004 18.7403 22.0001 19.0675C21.9997 19.3948 21.9356 19.7187 21.8115 20.0208C21.6873 20.3229 21.5056 20.5971 21.2767 20.8279Z"
                fill="#781214"
              />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default EllipseSlider;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import "./ellipse-slider.css";

// export default function SliderEllipse() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeOrder, setActiveOrder] = useState(0);

//   useEffect(() => {
//     const sliderContainer = containerRef.current;
//     if (!sliderContainer) return;

//     const slides = Array.from(
//       sliderContainer.querySelectorAll<HTMLDivElement>(".slider-ellipse__slide")
//     );
//     const sliderPagination = sliderContainer.querySelector<HTMLDivElement>(
//       ".slider-ellipse__pagination"
//     );

//     const sliderNavigations =
//       sliderContainer.querySelectorAll<HTMLButtonElement>(".slider-navigation");

//     let touchStartX = 0;
//     let touchEndX = 0;

//     const handleSwipe = () => {
//       const swipeThreshold = 50;
//       const swipeDistance = touchEndX - touchStartX;

//       let nextOrder = activeOrder;

//       if (Math.abs(swipeDistance) > swipeThreshold) {
//         if (swipeDistance > 0) {
//           nextOrder = (activeOrder - 1 + slides.length) % slides.length;
//         } else {
//           nextOrder = (activeOrder + 1) % slides.length;
//         }
//         setActiveOrder(nextOrder);
//       }
//     };

//     const clickHandler = (order: number) => {
//       setActiveOrder(order);
//     };

//     const navigationHandler = (dir: string) => {
//       if (dir === "prev") {
//         setActiveOrder((prev) => (prev - 1 + slides.length) % slides.length);
//       } else if (dir === "next") {
//         setActiveOrder((prev) => (prev + 1) % slides.length);
//       }
//     };

//     const update = () => {
//       if (!sliderContainer) return;

//       const { width, height } = sliderContainer.getBoundingClientRect();
//       const a = width / 2;
//       const b = height / 2;
//       const delta = Math.PI / slides.length / 2;

//       slides.forEach((slide, i) => {
//         const order = parseInt(slide.dataset.order || "0", 10);
//         const diff = order - activeOrder;
//         const idx = Math.abs(diff);

//         slide.style.zIndex = `${slides.length - idx}`;
//         slide.style.opacity = `${1 - (4 * idx) / slides.length}`;

//         const angle =
//           (Math.PI * 3) / 2 +
//           (diff < 0 ? -delta * idx * 1.7 : delta * idx * 1.7);

//         slide.style.left = `${width / 2 + a * Math.cos(angle)}px`;
//         slide.style.top = `${-b * Math.sin((Math.PI * 3) / 2)}px`;
//         slide.style.transform = `translate(-50%, -50%) scale(${1 - (1 * idx) / slides.length})`;
//       });
//     };

//     slides.forEach((slide, i) => {
//       slide.dataset.order = i.toString();
//       slide.addEventListener("click", () => clickHandler(i));
//     });

//     sliderNavigations.forEach((btn) => {
//       btn.addEventListener("click", () =>
//         navigationHandler(btn.dataset.dir ?? "")
//       );
//     });

//     sliderContainer.addEventListener("touchstart", (e) => {
//       touchStartX = e.touches[0].clientX;
//     });

//     sliderContainer.addEventListener("touchmove", (e) => {
//       touchEndX = e.touches[0].clientX;
//     });

//     sliderContainer.addEventListener("touchend", handleSwipe);

//     const onResize = () => update();
//     window.addEventListener("resize", onResize);

//     update();

//     return () => {
//       window.removeEventListener("resize", onResize);
//     };
//   }, [activeOrder]);

//   return (
//     <div className="slider-ellipse" ref={containerRef}>
//       <div className="slider-ellipse__container">
//         <div className="slider-ellipse__slide">
//           <video src="/video1.mp4" autoPlay muted loop />
//         </div>
//         <div className="slider-ellipse__slide">
//           <video src="/video2.mp4" autoPlay muted loop />
//         </div>
//         <div className="slider-ellipse__slide">
//           <video src="/video3.mp4" autoPlay muted loop />
//         </div>
//       </div>

//       <div className="slider-ellipse__pagination"></div>

//       <div className="slider-ellipse__navigation">
//         <button className="slider-navigation" data-dir="prev">
//           Prev
//         </button>
//         <button className="slider-navigation" data-dir="next">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
