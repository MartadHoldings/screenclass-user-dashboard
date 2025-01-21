import Students from "@/components/guardian/my-students/students";
import BackgroundContainer from "@/components/shared/background-container";
import Header from "@/components/shared/header";
import React from "react";

export const MyStudents = () => {
  return (
    <BackgroundContainer>
      <div className="mx-auto min-h-screen max-w-[1240px] bg-[#f1f1f1]">
        <div className="mx-3 min-h-screen bg-[#FAFAFA] pl-3 pr-3 md:mx-7 md:pl-4 md:pr-4 xl:pl-9">
          <Header title="My Students" />
          <Students />
        </div>
      </div>
    </BackgroundContainer>
  );
};
