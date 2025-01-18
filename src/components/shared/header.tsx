import Image from "next/image";
import React from "react";
import { inter } from "./fonts";

function Header() {
  return (
    <div className="ml-14 mr-7 flex items-center justify-between border-b border-b-SC-Deep-Blue pb-4 pt-7">
      <h1 className="segoe text-xl font-black text-[#1B1B1B]/80">
        My Students
      </h1>
      <div className="flex items-center gap-6">
        <p className={`${inter.className} text-[15px] font-light`}>
          12th June, 2023
        </p>
        <Image
          src={"/guardian/search.svg"}
          alt="search"
          width={40}
          height={40}
        />
      </div>
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-[18px]">
          <Image
            src={"/guardian/ellipse.svg"}
            alt="ellipse"
            width={80}
            height={80}
          />
          <div className="">
            <p className="segoe text-lg text-[#7C7C7C]">SC51124</p>
            <p className="segoe text-lg text-SC-Orange">Guardian</p>
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
}

export default Header;
