import Image from "next/image";
import React from "react";
import { inter } from "./fonts";
import MobileSideNav from "./mobile-sidenav";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between border-b border-b-SC-Deep-Blue pb-4 pt-7">
      <div className="flex items-center gap-3">
        <MobileSideNav />
        <h1 className="segoe text-lg font-black text-[#1B1B1B]/80 md:text-xl">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <p className={`${inter.className} text-xs md:text-[15px] font-light`}>
          12th June, 2023
        </p>
        <Image
          src={"/guardian/search.svg"}
          alt="search"
          width={40}
          height={40}
        />
      </div>
      <div className="hidden items-center md:flex gap-4">
        <div className="flex items-center gap-3 md:gap-[18px]">
          <Image
            src={"/guardian/ellipse.svg"}
            alt="ellipse"
            width={80}
            height={80}
            className="h-auto w-14 md:w-[80px]"
          />
          <div className="">
            <p className="segoe text-base text-[#7C7C7C] lg:text-lg">SC51124</p>
            <p className="segoe text-base text-SC-Orange lg:text-lg">
              Guardian
            </p>
          </div>
        </div>
        <Image
          src={"/guardian/logout-icon.svg"}
          alt="logout"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Header;
