import React from "react";
import Sidebar from "@/features/student/Components/Sidebar/Sidebar";
import Dashboard from "@/features/student/Components/Dashboard/Dashboard";
import Sideprofile from "@/features/student/Components/Sideprofile/Sideprofile";

export default function page() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="lg:w-[14%]">
        <Sidebar />
      </div>
      <div className="w-full p-0 md:pl-6 lg:w-[66%] lg:pl-7">
        <Dashboard />
      </div>
      <div className="w-[20%] pl-7">
        <Sideprofile />
      </div>
    </div>
  );
}
