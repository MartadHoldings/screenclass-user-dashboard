import { mulish } from "@/components/shared/fonts";
import Image from "next/image";
import React from "react";

const StudentDetailsCard = () => {
  return (
    <div
      className="flex h-[342px] w-[324px] flex-col items-center justify-center rounded-[13px] bg-white"
      style={{
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex h-[175px] w-[180px] items-center justify-center rounded-full border border-[#DFE0EB]">
        <Image
          src={"/guardian/ellipse3.svg"}
          alt="student profile picture"
          width={165}
          height={161}
        />
      </div>
      <p
        className={`${mulish.className} mt-1 text-xl font-semibold text-[#252733]`}
      >
        IfeOluwa Smith
      </p>
      <p className={`${mulish.className} text-lg text-[#6C6C6C]`}>Student</p>
      <p className={`${mulish.className} mt-8 text-lg text-SC-Orange`}>Class</p>
    </div>
  );
};

export default StudentDetailsCard;
