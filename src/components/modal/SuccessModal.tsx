import React from "react";
import Modal from "react-modal";
import Image from "next/image";

const SuccessModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      contentLabel="Success Modal"
      ariaHideApp={false}
    >
      <div className="flex h-[259px] w-[390px] flex-col items-center justify-center rounded-[10px] bg-white">
        <Image
          src={"/guardian/sucess-gif.gif"}
          alt="success gif"
          width={150}
          height={134}
        />
        <p className="mt-6 px-[20%] text-center text-sm text-[#1b1b1b]/80">
          Your transaction to upgrade to monthly plan was successful!
        </p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
