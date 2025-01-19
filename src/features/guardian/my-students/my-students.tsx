import Students from "@/components/guardian/my-students/students";
import Header from "@/components/shared/header";
import React from "react";

export const MyStudents = () => {
  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="mx-7 pl-9 pr-4 min-h-screen bg-[#FAFAFA]">
        <Header title="My Students" />
        <Students />
      </div>
    </div>
  );
}
