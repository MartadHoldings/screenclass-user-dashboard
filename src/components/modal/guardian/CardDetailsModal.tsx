"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import { nunito } from "@/components/shared/fonts";
import SuccessModal from "./SuccessModal";

const CardDetailsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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
      contentLabel="Card Details Modal"
      ariaHideApp={false}
    >
      <div className="w-[390px] rounded-[10px] bg-white pb-2 pl-7 pt-5">
        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            setIsOpen={setShowSuccessModal}
          />
        )}
        <form
          onSubmit={(e) => (e.preventDefault(), setShowSuccessModal(true))}
          className=""
        >
          <label
            htmlFor="card-number"
            className={`${nunito.className} text-[13px] text-black`}
          >
            Enter Card Number
          </label>
          <input
            id="card-number"
            type="text"
            placeholder="0000  1111 2222 3333"
            className={`${nunito.className} h-[50px] w-[80%] rounded-[10px] border border-[#ccc] bg-transparent pl-5 text-[13px] outline-none placeholder:text-[#1b1b1b]/60`}
            style={{
              boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
            }}
          />
          <div className="mt-5 grid w-full grid-cols-3 gap-[18px]">
            <div className="w-full">
              <label
                htmlFor="expiry-number"
                className={`${nunito.className} text-[13px] text-black`}
              >
                Expiry Number
              </label>
              <br />
              <input
                id="expiry-number"
                type="number"
                placeholder="12/25"
                className={`${nunito.className} h-[44px] w-full rounded-[10px] border border-[#ccc] bg-transparent pl-5 text-[13px] outline-none placeholder:text-[#1b1b1b]/60`}
                style={{
                  boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
                }}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="ccv"
                className={`${nunito.className} text-[13px] text-black`}
              >
                CCV
              </label>
              <br />
              <input
                id="ccv"
                type="number"
                placeholder="111"
                className={`${nunito.className} h-[44px] w-full rounded-[10px] border border-[#ccc] bg-transparent pl-5 text-[13px] outline-none placeholder:text-[#1b1b1b]/60`}
                style={{
                  boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
                }}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <button className="sansation mt-8 rounded bg-SC-Brand-Blue px-11 py-3 text-sm text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CardDetailsModal;
