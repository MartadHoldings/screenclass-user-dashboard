import React from "react";
import Modal from "react-modal";

const backgroundColor = (passNumber: number) => {
  const passColor = "#AA10B7"; // Background color for passed area
  const failColor = "#1FDCDC"; // Background color for failed area
  const failNumber = 100 - passNumber;
  return `conic-gradient(${failColor} 0%, ${failColor} ${failNumber}%, ${passColor} ${failNumber}%, ${passColor} 100%)`;
};

const PerformanceOverviewModal = ({
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
      contentLabel="Performance Overview Modal"
      ariaHideApp={false}
    >
      <div className="w-[390px] rounded-[10px] bg-white py-7">
        <h2 className="px-[20%] text-center text-sm text-[#1B1B1B]/80">
          Hi Temitope, here is your overall performance
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div
            className="mt-6 flex h-[120px] w-[120px] items-center justify-center rounded-full"
            style={{
              background: backgroundColor(80),
            }}
          >
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white text-xs font-normal text-[rgba(135,135,135,1)]"></div>
          </div>
          <div className="mt-4 flex items-center gap-5">
            <div className="flex items-center gap-[15px]">
              <div className="h-4 w-4 rounded-full bg-[#1FDCDC]"></div>
              <p className="text-[13px] text-[#1B1B1B]">
                Fail Percentage (20%)
              </p>
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="h-4 w-4 rounded-full bg-[#AA10B7]"></div>
              <p className="text-[13px] text-[#1B1B1B]">
                Pass Percentage (80%)
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#1B1B1B]/80">
            <span className="text-SC-Brand-Blue">Status</span>: Passed
          </p>
          <div className="mt-4 flex px-[10%] text-sm text-[#1B1B1B]/80">
            <p className="m-0 text-SC-Orange">Remarks:</p>
            <p className="m-0 text-center text-[#1B1B1B]/80">
              You passed your subjects averagely. You need to brace up
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PerformanceOverviewModal;
