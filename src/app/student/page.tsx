import React from "react";
import { Overview } from "@/features/student/overview";
import Sidebar from "@/features/student/Components/Sidebar";

export default function page() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#F1F1F1] text-slate-900 sm:flex-row">
      {/* <Overview /> */}
      <div className="">
        <Sidebar />
      </div>
    </div>
  );
}
