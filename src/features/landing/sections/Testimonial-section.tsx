import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Carousel } from "../components";
import { EmblaOptionsType } from "embla-carousel";

export const TestimonialSection = () => {
  const data = [
    {
      stars: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Jane Doe",
      occupation: "CEO",
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Mark Obidiegwu",
      occupation: "Student",
    },
    {
      stars: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Jane Doe",
      occupation: "CEO",
    },
    {
      stars: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      name: "Mark Obidiegwu",
      occupation: "Student",
    },
  ];

  //   const carouselSettings = {
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 2000,
  //     autoplaySpeed: 2000,
  //     cssEase: "ease-in-out",
  //     swipeToSlide: true,
  //   };
  const carouselSettings: EmblaOptionsType = {
    loop: true,
    align: "center",
    dragFree: false,
    startIndex: 0,
  };

  return (
    <section className="grid min-h-screen w-full place-items-center bg-bg-index-two bg-cover bg-center bg-no-repeat px-2 font-poppins sm:px-8 lg:px-14">
      <div className="min-h-[60dvh] w-full">
        <h4 className="text-center text-xl font-bold text-[#0C598D] sm:text-2xl md:text-left lg:text-5xl">
          Testimonials
        </h4>
        <div className="mx-auto mt-5 flex w-full flex-row items-center border-2 border-green-500 lg:mt-10 xl:w-4/5">
          <Image
            src="/images/testimonial-girl-img.png"
            alt="testimonial image"
            width={135}
            height={135}
            className="rounded-full border-2 border-black bg-center object-cover md:h-[250px] md:w-[250px] lg:h-[363px] lg:w-[363px]"
          />
          <div className="min-h-1/2 flex-automd:-ml-36 relative z-30 -ml-20 lg:-ml-48">
            {/* <Carousel
              options={carouselSettings}
              isAutoPlay={true}
              autoPlayInterval={2000}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="embla__slide relative z-30 flex flex-col justify-between self-center rounded-[20px] bg-[#0D2450E5] px-4 py-4 md:px-10"
                >
                  <Image
                    src="/images/Quote-Left.png"
                    alt="Quote Left"
                    width={35}
                    height={35}
                    className="absolute left-1/2 top-[-20px] -translate-x-1/2 md:h-[84px] md:w-[84px]"
                  />

                  <div className="w-full">
                    <div className="flex gap-x-2">
                      {Array.from({ length: item.stars }).map((_, index) => (
                        <FaStar key={index} size={24} color="#F1ED1D" />
                      ))}
                    </div>
                    <p className="mt-4 text-[8px] font-medium text-white max-sm:leading-3 md:mt-6 md:text-xs lg:text-base">
                      {item.text}
                    </p>
                  </div>
                  <div className="mt-6 flex w-fit flex-col gap-x-2 border-2 border-black lg:mt-10 xl:mt-12">
                    <p className="text-[8px] font-medium text-white md:text-xs lg:text-lg">
                      {item.name}
                    </p>
                    <p className="text-center text-[6px] font-normal text-[#F1ED1D] md:text-xs lg:text-sm">
                      {item.occupation}
                    </p>
                  </div>
                  <Image
                    src="/images/Quote-Right.png"
                    alt="Quote Right"
                    width={35}
                    height={35}
                    className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 md:h-[84px] md:w-[84px]"
                  />
                </div>
              ))}
            </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};
