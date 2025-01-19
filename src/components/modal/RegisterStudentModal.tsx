"use client";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Select from "react-select";

function RegisterStudentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, [isOpen]);
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
      contentLabel="Register Student Modal"
      ariaHideApp={false}
    >
      <div className="w-[298px] bg-SC-Bland px-8 pb-3 pt-5">
        <h2 className="segoe font-semibold text-black">Register new student</h2>
        <form className="mt-6">
          <label
            htmlFor="full-name"
            className="segoe text-sm text-[rgba(27,27,27,0.90)]"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            className="segoe mb-4 h-8 w-full rounded-md border border-[#ccc] bg-transparent px-4 py-3 text-xs font-light outline-none placeholder:text-[rgba(27,27,27,0.70)]"
            placeholder="Ada George"
          />
          <label
            htmlFor="password"
            className="segoe text-sm text-[rgba(27,27,27,0.90)]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="segoe mb-4 h-8 w-full rounded-md border border-[#ccc] bg-transparent px-4 py-3 text-xs font-light outline-none placeholder:text-2xl placeholder:text-[rgba(27,27,27,0.70)]"
            placeholder="....."
          />
          <label
            htmlFor="confirm-password"
            className="segoe text-sm text-[rgba(27,27,27,0.90)]"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            className="segoe mb-4 h-8 w-full rounded-md border border-[#ccc] bg-transparent px-4 py-3 text-xs font-light outline-none placeholder:text-2xl placeholder:text-[rgba(27,27,27,0.70)]"
            placeholder="....."
          />
          <label
            htmlFor="class"
            className="segoe text-sm text-[rgba(27,27,27,0.90)]"
          >
            Choose Class
          </label>
          <Select
            id="class"
            className="segoe w-full text-xs font-light outline-none"
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                background: "transparent",
                border: "1px solid #ccc",
                borderRadius: "6px",
                height: "35px",
              }),
            }}
          />
          <button className="bg-SC-Blue segoe mt-6 w-full rounded-[4px] py-1 font-semibold text-white">
            Register
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default RegisterStudentModal;
