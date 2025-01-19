import React from "react";
import { mulish } from "@/components/shared/fonts";
import Image from "next/image";

const StudentsTable = () => {
  return (
    <div className="mt-3 rounded-l-lg border border-[#DFE0EB] bg-white">
      <h3
        className={`${mulish.className} py-8 pl-5 text-[23px] font-bold text-[#252733]`}
      >
        My Students
      </h3>
      <table className={`${mulish.className} w-[95%]`}>
        <thead className="">
          <tr className="border-b border-b-[#DFE0EB]">
            <th className="w-[17.5%] pb-2 font-semibold">Photo</th>
            <th className="w-[30%] pb-2 text-left font-semibold">Name</th>
            <th className="w-[17.5%] pb-2 text-left font-semibold">
              Registration No
            </th>
            <th className="w-[17.5%] pb-2 text-left font-semibold">Class</th>
            <th className="w-[17.5%]"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, index) => (
            <tr
              key={index}
              className="border-b border-b-[#DFE0EB] last:border-b-0"
            >
              <td className="w-[17.5%] py-2">
                <div className="flex items-center justify-center">
                  <Image
                    src={"/guardian/ellipse2.svg"}
                    alt="student photo"
                    width={40}
                    height={40}
                  />
                </div>
              </td>
              <td className="w-[30%] text-left text-sm font-semibold text-[#252733]">
                Temilola Ann
              </td>
              <td className="w-[17.5%] text-left text-sm font-semibold text-[#252733]">
                SC000011
              </td>
              <td className="w-[17.5%] text-left text-sm font-semibold text-[#252733]">
                Common Entrance Prep
              </td>
              <td className="w-[17.5%]">
                <div className="flex justify-end pr-9">
                  <Image
                    src={"/guardian/more - vertical.svg"}
                    alt="more vertical icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
