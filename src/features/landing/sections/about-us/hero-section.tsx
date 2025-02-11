import Image from "next/image";
import { Header } from "../../components";

export const AboutHeroSection = () => {
  return (
    <section className="min-h-fit w-full bg-bg-about-hero bg-cover bg-center bg-no-repeat">
      <Header />
      {/* info section */}
      <div className="flex min-h-[calc(100dvh-83px)] w-full flex-col px-8 max-sm:justify-end max-sm:pb-12 md:flex-row lg:px-[3.5rem]">
        <div className="flex min-h-full w-full justify-end">
          <div className="flex w-[80%] flex-col justify-center lg:w-[50%]">
            <div className="flex w-full justify-center">
              <Image
                src="/images/about-us-title.png"
                alt="about us titles"
                width={138}
                height={143}
                className="object-cover md:h-[294px] md:w-[281px]"
              />
              <p className="h-fit self-end text-2xl font-semibold text-[#ffffff] md:max-w-[245px] md:text-4xl">
                Know who we are and what we do
              </p>
            </div>
            <div className="w-full max-sm:mt-[15%]">
              <p className="text-xs font-normal text-[#ffffff] md:text-sm lg:text-base">
                We empower students with 21st century skill: Join our E-lerrning
                community and unlock your potential. Screenclass Is a mANEGEMENT
                SYSTEM (LMS) Developed to meet and suit the learning process of
                the average student/learner in the sub-saharan Africa bearnin in
                mind the challenges of access to “EduTech” facilities in the
                region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
