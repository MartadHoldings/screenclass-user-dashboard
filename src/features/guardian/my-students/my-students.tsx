import Students from "@/components/guardian/my-students/students";
import Header from "@/components/shared/header";
import React from "react";

function MyStudents() {
  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="min-h-screen bg-[#FAFAFA]">
        <Header />
        <Students />
      </div>
    </div>
  );
}

export default MyStudents;
