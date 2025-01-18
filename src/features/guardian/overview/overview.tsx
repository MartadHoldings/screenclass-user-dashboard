import Image from "next/image";
import React from "react";
import { inter } from "@/components/shared/fonts";
import { publicSans } from "@/components/shared/fonts";
import StudentsTable from "@/components/guardian/overview/students-table";
import SubjectCard from "@/components/shared/subject-card";

export const Overview = () => {
  return (
    <>
      <div className="bg-[#FBFBFB] pl-14">
        <div className="grid grid-cols-3 items-end gap-16">
          {/* hero */}
          <div className="col-span-2">
            <div className="flex items-center justify-between pl-2 pr-6">
              <h1 className="segoe text-xl font-bold">Dashboard</h1>
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
            </div>
            <div className="mt-8 flex items-center justify-between rounded-[30px] bg-[rgba(27,181,247,0.29)] px-8 py-4">
              <div>
                <h2
                  className={`${inter.className} text-SC-Brand-Blue text-xl font-bold`}
                >
                  Welcome back IfeOluwa!
                </h2>
                <p className="mt-4 text-[15px] font-light text-[#1B1B1B]">
                  You’ve learned 80% of your goal this week! keep it up and
                  improve your result
                </p>
              </div>
              <Image
                src={"/guardian/overview-hero.svg"}
                alt="overview page hero"
                width={296}
                height={168}
              />
            </div>
          </div>
          {/* logout */}
          <div
            className="flex flex-col items-center bg-white py-[50px] pl-9 pr-7"
            style={{
              boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex w-full items-center justify-between">
              <h2 className={`${publicSans.className} text-xl font-bold`}>
                Logout
              </h2>
              <Image
                src={"/guardian/logout-icon.svg"}
                alt="logout"
                width={30}
                height={30}
              />
            </div>
            <div className="mt-6">
              <Image
                src={"/guardian/ellipse.svg"}
                alt="ellipse"
                width={80}
                height={80}
              />
              <div className="bg-SC-Brand-Blue -mt-2 ml-auto flex h-[18px] w-[18px] items-center justify-center rounded-full text-xl text-white">
                +
              </div>
            </div>
            <p className="segoe mt-3 text-xl font-bold text-[#1B1B1B]">
              IfeOluwa B. Smith
            </p>
            <p className="segoe mt-[6px] text-center text-lg text-[#7C7C7C]">
              SC51124
            </p>
            <p className="segoe text-lg text-SC-Orange">Guardian</p>
          </div>
        </div>
        <StudentsTable />
        <div className="mt-8 grid grid-cols-3 gap-11">
          {/* subjects */}
          <div className="col-span-2">
            <div className="flex items-center justify-between">
              <h4
                className={`${inter.className} text-[15px] font-bold text-black`}
              >
                All Subjects
              </h4>
              <div className="flex items-center gap-4">
                <p className="segoe text-[15px] font-bold text-black/80">
                  More
                </p>
                <Image
                  src={"/guardian/more-horizontal.svg"}
                  alt="more icon"
                  width={16}
                  height={8}
                />
              </div>
            </div>
            {/* cards */}
            <div className="mt-5 grid grid-cols-3 gap-4">
              <SubjectCard
                percentage={80}
                title="Comprehension"
                subject="English Language"
                bgColor="bg-[#4D4BAC]"
              />
              <SubjectCard
                percentage={50}
                title="Common Fractions"
                subject="Mathematics"
                bgColor="bg-[#9698D5]"
              />
              <SubjectCard
                percentage={70}
                title="Health Science"
                subject="Basic Science"
                bgColor="bg-[#86BBEC]"
              />
            </div>
          </div>
          {/* recent activities */}
          <div
            className="bg-white pl-8 pr-3 pt-3"
            style={{
              boxShadow: "4px 4px 10px -10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex items-center justify-between">
              <h4
                className={`${inter.className} text-[15px] font-bold text-black`}
              >
                Recent Activities
              </h4>
              <Image
                src={"/guardian/bell-icon.svg"}
                alt="bell"
                width={18}
                height={20}
              />
            </div>
            {Array.from({ length: 2 }, (_, index) => (
              <p
                key={index}
                className="segoe border-b border-b-[#E0DFDF] py-5 text-[rgba(27,27,27,0.80)] last:border-b-0"
              >
                Lorem ipsum dolor sit amet consectetur. Nulla aliquet nulla id.
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
