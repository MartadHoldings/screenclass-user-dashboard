import Image from "next/image";
import { Carousel } from "../components";
import { EmblaOptionsType } from "embla-carousel";

export const PartnersSection = () => {
  const videoThumbnails = [
    { imgSrc: "/images/martad-logo.png", color: "white" },
    { imgSrc: "/images/mtn-logo.png", color: "custom-yellow" },
    { imgSrc: "/images/9mobile-logo.png", color: "custom-green" },
    { imgSrc: "/images/airtel-logo.png", color: "white" },
    { imgSrc: "/images/ltv-logo.png", color: "white" },
  ];

  //   const videoThumbnails = [
  //     "/images/martad-3d-slider.png",
  //     "/images/mtn-3d-slider.png",
  //     "/images/9mobile-3d-slider.png",
  //     "/images/airtel-3d-slider.png",
  //     "/images/ltv-3d-slider.png",
  //   ];

  const carouselSettings: EmblaOptionsType = {
    loop: true,
    align: "center",
    dragFree: false,
    startIndex: 0,
  };

  return (
    <section className="grid min-h-screen w-full place-items-center bg-bg-index-two bg-cover bg-center bg-no-repeat py-6 pl-2 font-poppins sm:pl-8 lg:pl-14">
      <div className="flex min-h-[60dvh] w-full flex-col gap-y-12">
        <h3 className="text-center text-lg font-semibold text-black md:text-2xl lg:text-4xl xl:text-5xl">
          OUR PARTNERS
        </h3>
        <div className="grid h-[390px] w-[90%] items-center self-end">
          <Carousel
            isAutoPlay
            autoPlayInterval={3000}
            options={carouselSettings}
            className="h-[374px] flex-[0_0_70%] px-2 sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_25%] xl:flex-[0_0_22.25%]"
          >
            {videoThumbnails.map((item, index) => (
              <div
                className={`relative grid h-[373px] w-full transform place-items-center rounded-2xl bg-${item.color} hover:rotate-x-6 hover:rotate-y-6 shadow-xl transition-transform duration-500 ease-in-out hover:shadow-2xl`}
                key={index}
                style={{ perspective: "1200px" }}
              >
                <div className="transform rounded-2xl hover:scale-105">
                  <Image
                    src={item.imgSrc}
                    alt="card thumbnail"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <p className="text-center text-lg font-medium text-black lg:text-2xl">
          Trusted by <span className="text-SC-Orange">100+</span> Top Companies
        </p>
      </div>
    </section>
  );
};
