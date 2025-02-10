import Image from "next/image";

export const PersonalizedSection = () => {
  return (
    <section className="grid min-h-screen w-full place-items-center bg-bg-index-two bg-cover bg-center bg-no-repeat px-2 font-poppins sm:px-8 lg:px-14">
      <div className="flex h-3/5 w-full flex-col gap-x-4 sm:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 sm:w-2/5 sm:items-start">
          <h5 className="text-SC-text-red max-xs:text-center text-xl font-semibold md:text-[28px] lg:text-4xl xl:text-5xl">
            Learn On-The-Go!
          </h5>
          <div className="flex flex-col gap-y-8 lg:mt-16">
            <h4 className="max-xs:text-center text-2xl font-semibold capitalize text-black lg:text-4xl xl:text-[52px] xl:leading-[72px]">
              Learn <span className="font-medium">without</span> boundaries
            </h4>
            <p className="md:text-baselg:text-2xl text-center text-sm font-semibold text-black sm:text-left">
              Personalized Learning Unleashed
            </p>
          </div>
        </div>
        <div className="h-full w-full sm:w-3/5">
          {/* <div className="relative h-[200px] w-full border-2 border-green-500 md:h-[593px] sm:h-[350px] md:h-[450px] lg:h-[593px]">
            <Image
              src={"/images/laptop-screen.png"}
              alt="personalized learning image"
              layout="fill"
              className="object-contain"
            />
          </div> */}
          <div className="relative h-full w-full">
            <Image
              src="/images/laptop-screen.png"
              alt="personalized learning image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
