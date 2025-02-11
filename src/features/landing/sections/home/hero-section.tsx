import Image from "next/image";
import { Header } from "../../components";

export const HeroSection = () => {
  return (
    <div className="min-h-fit w-full bg-bg-index-one bg-cover bg-center bg-no-repeat max-sm:relative">
      <Header />
      {/* Info Section */}
      <div className="flex min-h-[calc(100dvh-83px)] w-full flex-col px-8 md:flex-row lg:px-[3.5rem]">
        {/* Left Content */}
        <div className="flex min-h-full w-full flex-col justify-center gap-y-6 lg:w-[50%]">
          <div className="w-full text-white">
            <h2
              className="text-4xl font-semibold leading-[58px] lg:text-[54px] lg:leading-[96px] xl:text-[64px]"
              style={{ wordSpacing: ".20em" }}
            >
              Entertaining <br />
              <span className="mr-2 text-2xl">Approach to</span>
              <span className="text-[#021D76]">Learning!</span>
            </h2>
            <h4 className="text-base font-semibold md:text-xl">
              Quality Basic Education skillfully delivered
            </h4>
          </div>

          {/* Buttons */}
          <div className="flex w-full gap-x-4">
            <button className="rounded-[100px] bg-SC-Orange px-4 py-2 font-poppins text-sm font-medium uppercase text-white md:rounded-lg md:px-6 md:py-4 lg:text-base">
              Get Started
            </button>
            <button className="block w-[122px] rounded-[100px] bg-SC-Nav-Blue px-4 py-2 text-sm font-medium capitalize text-white md:hidden">
              Login
            </button>
          </div>

          {/* Download Buttons */}
          <div className="bottom-8 left-8 z-20 flex w-fit gap-x-4 max-sm:absolute">
            {[
              {
                src: "/images/google-play-icon.png",
                label: "Google Play",
              },
              {
                src: "/images/apple-play-icon.png",
                label: "App Store",
              },
            ].map((item, index) => (
              <button
                key={index}
                className="flex h-[32px] w-[105px] items-center gap-x-2 rounded-xl border border-white bg-[#0E0E0E] px-3 py-2 md:h-[56px] md:w-[170px]"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={14}
                  height={14}
                  className="object-contain md:h-[24px] md:w-[24px]"
                />
                <div className="flex-1 text-white">
                  <p className="text-[6px] font-light md:text-xs">
                    Available on the
                  </p>
                  <p className="text-[9px] font-semibold md:text-base">
                    {item.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex min-h-full w-full justify-end lg:w-[50%]">
          <Image
            src="/images/studentt 1.png"
            alt="hero image"
            width={318}
            height={322}
            className="object-cover md:h-full md:w-[400px] xl:w-[613px]"
            style={{ height: "auto" }}
            sizes="(max-width: 1440px): 100vw, (max-width:780px): 50vw"
          />
        </div>
      </div>
    </div>
  );
};
