"use client"; // Prevent SSR issues

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { PartnerBlock } from "../sections/new-partners-section";

interface VideoThumbnail {
  imgSrc: string;
  color: string;
}

interface SwiperCoverflowProps {
  videoThumbnails: VideoThumbnail[];
}

// {
//         rotate: -10,
//         stretch: -50,
//         depth: 90,
//         modifier: 1,
//         slideShadows: true,
//       }

export const SwiperCoverflow: React.FC<SwiperCoverflowProps> = ({
  videoThumbnails,
}) => {
  return (
    <div className="slider-container w-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        //   autoplay={{ delay: 3000, disableOnInteraction: false }}
        //   coverflowEffect={{
        //     rotate: -10,
        //     stretch: -50,
        //     depth: 90,
        //     modifier: 1,
        //     slideShadows: true,
        //   }}

        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        //   breakpoints={{
        //     375: {
        //       slidesPerView: 2,
        //     },
        //     600: {
        //       slidesPerView: 2,
        //     },
        //     900: {
        //       slidesPerView: 3,
        //     },
        //     1200: {
        //       slidesPerView: 4,
        //     },
        //     1500: {
        //       slidesPerView: 5,
        //     },
        //   }}
        modules={[EffectCoverflow, Autoplay]}
        className="h-[375px] w-full"
      >
        {videoThumbnails.map((item, index) => (
          <SwiperSlide key={index} className="min-w-[250px] max-w-[270px]">
            <PartnerBlock imgUrl={item.imgSrc} className={item.color} />
            {/* <div
            className="hover:rotate-x-6 hover:rotate-y-6 relative grid h-[375px] w-full transform place-items-center rounded-2xl transition-transform duration-500 ease-in-out hover:shadow-2xl"
            style={{
              perspective: "1200px",
              backgroundColor: item.color,
            }}
          >
            <div className="transform hover:scale-105">
              <Image
                src={item.imgSrc}
                alt={`Slide ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
