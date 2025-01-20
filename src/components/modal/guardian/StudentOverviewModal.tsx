"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { nunito } from "../../shared/fonts";
import ManageStudentsModal from "./ManageStudentsModal";

const StudentOverviewModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showManageStudentModal, setShowManageStudentModal] = useState(false);
  return (
    <Modal
      appElement={
        (document.getElementById("__next") as HTMLElement) || undefined
      }
      isOpen={isOpen}
      className="modal"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Student Modal"
      ariaHideApp={false}
    >
      {showManageStudentModal && (
        <ManageStudentsModal
          isOpen={showManageStudentModal}
          setIsOpen={setShowManageStudentModal}
        />
      )}
      <div className="w-[234px] bg-white px-10 pb-7 pt-10">
        <h2 className={`${nunito.className} text-center text-[15px] font-bold`}>
          Student Name
        </h2>
        <button className="segoe mt-11 h-[30px] w-full rounded bg-SC-Blue text-[15px] text-white">
          Manage Student
        </button>
      </div>
    </Modal>
  );
}

export default StudentOverviewModal;
