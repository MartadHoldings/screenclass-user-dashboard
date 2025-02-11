"use client";

import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  children: React.ReactNode;
  isAutoPlay?: boolean;
  autoPlayInterval?: number;
  isCoverflow?: boolean;
  options?: EmblaOptionsType;
  className?: string;
};

type SlideTransform = {
  translateX: number;
  translateY: number;
  scale: number;
  opacity: number;
};

export const PartnerCarousel: React.FC<PropType> = ({
  children,
  isAutoPlay = false,
  autoPlayInterval = 3000,
  isCoverflow = false,
  options,
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true,
      align: "center",
      containScroll: false,
    },
    [
      Autoplay({
        playOnInit: isAutoPlay,
        delay: autoPlayInterval,
        stopOnInteraction: false,
      }),
    ],
  );

  const [slideTransforms, setSlideTransforms] = useState<SlideTransform[]>([]);

  useEffect(() => {
    if (!emblaApi || !isCoverflow) return;

    const updateCoverflowEffect = () => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slides = emblaApi.slideNodes();
      const selectedIndex = emblaApi.selectedScrollSnap();
      const slidesPerView = 3; // Number of visible slides

      const transforms = slides.map((_, index) => {
        // Calculate the offset from the center slide
        const offset = index - selectedIndex;
        const normalizedOffset = offset / slidesPerView;

        // Base values for the transform
        const centerX = 0;
        const amplitude = 80; // Height of the parabolic curve
        const spread = 300; // Horizontal spread between slides

        // Calculate parabolic motion
        const translateX = offset * spread;
        const translateY = Math.pow(normalizedOffset * 2, 2) * amplitude;

        // Scale calculation
        let scale = 0.65; // Default scale for side slides
        if (Math.abs(offset) < 0.5) {
          // Center slide
          scale = 1.05;
        }

        // Opacity for smooth fade effect
        const opacity = Math.max(0, 1 - Math.abs(normalizedOffset));

        return {
          translateX,
          translateY,
          scale,
          opacity,
        };
      });

      setSlideTransforms(transforms);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateCoverflowEffect);
    };

    emblaApi.on("scroll", handleScroll);
    emblaApi.on("resize", updateCoverflowEffect);
    emblaApi.on("select", updateCoverflowEffect);

    updateCoverflowEffect();

    return () => {
      emblaApi.off("scroll", handleScroll);
      emblaApi.off("resize", updateCoverflowEffect);
      emblaApi.off("select", updateCoverflowEffect);
    };
  }, [emblaApi, isCoverflow]);

  return (
    <div className="w-full overflow-hidden">
      <div className="embla relative mx-auto max-w-[1200px]" ref={emblaRef}>
        <div className="embla__container relative flex h-[390px] items-center justify-center">
          {React.Children.map(children, (child, index) => {
            const transform = slideTransforms[index] || {
              translateX: 0,
              translateY: 0,
              scale: 1,
              opacity: 1,
            };

            return (
              <div
                className={`embla__slide relative h-80 flex-[0_0_33.333%] ${className} `}
                style={{
                  transform: `
                translateX(${transform.translateX}px)
                translateY(${transform.translateY}px)
                scale(${transform.scale})
              `,
                  opacity: transform.opacity,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-150px",
                  width: "300px",
                  zIndex: transform.scale === 1.5 ? 2 : 1,
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
