import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="grid min-h-[40px] w-full justify-center bg-white pb-2 shadow-md">
      <div className="flex w-[80vw] justify-between">
        <div className="relative h-[50px] w-fit">
          <Image
            src="/guardian/screenclass-logo.svg"
            alt="screenclass-logo"
            width={200}
            height={29}
            className="object-fit mt-2"
          />
          <div className="absolute inset-y-0 right-0 mb-[4px] h-fit w-fit bg-black p-[2px]">
            <p className="text-[10px] font-semibold uppercase text-white">
              cbt
            </p>
          </div>
        </div>
        <div className="flex h-[0.75rem] items-center justify-center space-x-3 rounded-ee-[3rem] rounded-es-[3rem] bg-SC-Brand-Blue px-10 py-3">
          <p className="text-sm font-medium capitalize text-white">
            <span className="ml-1 text-SC-Orange">date:</span>
            wednesday, 22 january, 2025
          </p>
          <p className="text-sm font-medium capitalize text-white">
            <span className="ml-1 text-SC-Orange">time:</span>
            08: 21
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-fit text-black">
            <p className="text-[1rem] font-medium capitalize">Malcom Dunamis</p>
            <p className="text-xs font-normal">Student ID: SC28365</p>
          </div>
          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-[1px] border-gray-300">
            <Image
              src="/guardian/profile-icon.svg"
              alt="profile-icon"
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
