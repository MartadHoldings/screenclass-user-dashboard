import Students from "@/components/guardian/my-students/students";
import Header from "@/components/shared/header";
import React from "react";

function MyStudents() {
  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="min-h-screen ml-14 mr-7 bg-[#FAFAFA] pl-9 pr-[14px]">
        <Header />
        <Students />
      </div>
    </div>
  );
}

export default MyStudents;
