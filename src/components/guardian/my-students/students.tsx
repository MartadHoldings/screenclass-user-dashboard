"use client";
import ManageStudentsModal from "@/components/modal/ManageStudentsModal";
import RegisterStudentModal from "@/components/modal/RegisterStudentModal";
import Image from "next/image";
import React, { useState } from "react";

const Students = () => {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showManageStudentsModal, setShowManageStudentsModal] = useState(false);
  return (
    <div className="">
      {showAddStudentModal && (
        <RegisterStudentModal
          isOpen={showAddStudentModal}
          setIsOpen={setShowAddStudentModal}
        />
      )}
      {showManageStudentsModal && (
        <ManageStudentsModal
          isOpen={showManageStudentsModal}
          setIsOpen={setShowManageStudentsModal}
        />
      )}
      <div className="my-5 flex items-center justify-between">
        <h2 className="segoe text-xl text-[#1B1B1B]">Students</h2>
        <button
          onClick={() => setShowAddStudentModal(true)}
          className="segoe w-[292px] rounded-md bg-SC-Orange py-[14px] text-sm font-black text-white"
        >
          Add new student
        </button>
      </div>
      <div className="space-y-2 pb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-[10px] bg-white px-9 py-4"
            style={{
              boxShadow: "0px 0px 10px -2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex items-center gap-[26px]">
              <Image
                src={"/guardian/students-ellipse.svg"}
                alt="user icon"
                width={70}
                height={70}
              />
              <div>
                <h3 className="segoe text-2xl font-semibold text-[#1B1B1B]">
                  Temilola Ann
                </h3>
                <p className="segoe text-[#1B1B1B]">Student&apos;s Class</p>
                <p className="segoe mt-4 text-lg text-SC-Orange">
                  Student&apos;s ID
                </p>
              </div>
            </div>
            <div
              onClick={() => setShowManageStudentsModal(true)}
              className="cursor-pointer"
            >
              <Image
                src={"/guardian/blue-more-icon.svg"}
                alt="more icon"
                width={34}
                height={6}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
