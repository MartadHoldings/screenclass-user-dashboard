"use client";

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  children: React.ReactNode;
  isAutoPlay?: boolean;
  autoPlayInterval?: number;
  options?: EmblaOptionsType;
  className?: string;
};

export const Carousel: React.FC<PropType> = ({
  children,
  isAutoPlay = false,
  autoPlayInterval = 3000,
  options,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: isAutoPlay,
      delay: autoPlayInterval,
      stopOnInteraction: false,
    }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [children, emblaApi]);

  return (
    <section className="embla m-auto w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {React.Children.map(children, (child) => (
            <div className={`embla__slide ${className}`}>{child}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
// "use client";

// import React, { useEffect, useState } from "react";
// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// type PropType = {
//   children: React.ReactNode;
//   isAutoPlay?: boolean;
//   autoPlayInterval?: number;
//   isCoverflow?: boolean; // Enable Coverflow effect
//   options?: EmblaOptionsType;
//   className?: string;
// };

// export const Carousel: React.FC<PropType> = ({
//   children,
//   isAutoPlay = false,
//   autoPlayInterval = 3000,
//   isCoverflow = false,
//   options,
//   className,
// }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//     Autoplay({
//       playOnInit: isAutoPlay,
//       delay: autoPlayInterval,
//       stopOnInteraction: false,
//     }),
//   ]);

//   const [slideTransforms, setSlideTransforms] = useState<
//     { rotateY: number; scale: number }[]
//   >([]);

//   useEffect(() => {
//     if (!emblaApi || !isCoverflow) return;

//     const updateCoverflowEffect = () => {
//       const slides = emblaApi.slideNodes();
//       const scrollProgress = emblaApi.scrollProgress();

//       const transforms = slides.map((_, index) => {
//         const position = (index / (slides.length - 1)) * 2 - 1;
//         const offset = position - scrollProgress;
//         const rotateY = offset * 30; // Rotate effect
//         const scale = 1 - Math.abs(offset) * 0.3; // Scale effect

//         return { rotateY, scale };
//       });

//       setSlideTransforms(transforms);
//     };

//     emblaApi.on("scroll", updateCoverflowEffect);
//     emblaApi.on("resize", updateCoverflowEffect);
//     updateCoverflowEffect();
//   }, [emblaApi, isCoverflow]);

//   return (
//     <section className="embla m-auto w-full">
//       <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//         <div className="embla__container flex gap-4">
//           {React.Children.map(children, (child, index) => {
//             const transform = slideTransforms[index] || {
//               rotateY: 0,
//               scale: 1,
//             };
//             return (
//               <div
//                 className={`embla__slide ${className}`}
//                 style={{
//                   transform: `perspective(1000px) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
//                   transition: isCoverflow ? "transform 0.5s ease" : "",
//                 }}
//               >
//                 {child}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import React, { useEffect, useState } from "react";
// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// type PropType = {
//   children: React.ReactNode;
//   isAutoPlay?: boolean;
//   autoPlayInterval?: number;
//   isCoverflow?: boolean; // Enable Coverflow effect
//   options?: EmblaOptionsType;
//   className?: string;
// };

// export const Carousel: React.FC<PropType> = ({
//   children,
//   isAutoPlay = false,
//   autoPlayInterval = 3000,
//   isCoverflow = false,
//   options,
//   className,
// }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//     Autoplay({
//       playOnInit: isAutoPlay,
//       delay: autoPlayInterval,
//       stopOnInteraction: false,
//     }),
//   ]);

//   const [slideTransforms, setSlideTransforms] = useState<
//     { rotateY: number; translateY: number; scale: number }[]
//   >([]);

//   useEffect(() => {
//     if (!emblaApi || !isCoverflow) return;

//     const updateCoverflowEffect = () => {
//       const slides = emblaApi.slideNodes();
//       const scrollProgress = emblaApi.scrollProgress();

//       const transforms = slides.map((_, index) => {
//         const position = (index / (slides.length - 1)) * 2 - 1;
//         const offset = position - scrollProgress;
//         console.log(offset);

//         // Apply a curved arc motion effect
//         const rotateY = offset * 40; // Y-axis tilt
//         const translateY = Math.sin(offset * Math.PI) * -70; // Arc effect (adjust -50 for higher curve)
//         const scale = 1 - Math.abs(offset) * 0.2; // Depth effect

//         return { rotateY, translateY, scale };
//       });

//       setSlideTransforms(transforms);
//     };

//     emblaApi.on("scroll", () => requestAnimationFrame(updateCoverflowEffect));
//     emblaApi.on("resize", updateCoverflowEffect);
//     updateCoverflowEffect();
//   }, [emblaApi, isCoverflow]);

//   return (
//     <section className="embla m-auto w-full">
//       <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//         <div className="embla__container flex gap-4">
//           {React.Children.map(children, (child, index) => {
//             const transform = slideTransforms[index] || {
//               rotateY: 0,
//               translateY: 0,
//               scale: 1,
//             };
//             return (
//               <div
//                 className={`embla__slide ${className}`}
//                 style={{
//                   transform: `perspective(1000px) rotateY(${transform.rotateY}deg) translateY(${transform.translateY}px) scale(${transform.scale})`,
//                   transition: isCoverflow ? "transform 0.5s ease-out" : "",
//                 }}
//               >
//                 {child}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
