"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import PaymentCard from "../guardian/subscriptions/payment-card";
import CardDetailsModal from "./CardDetailsModal";

const paymentModes = [
  "Debit Card (PayStack)",
  "Flutter wave",
  "Bank Deposit",
  "USSD Code",
];

type PaymentMode = (typeof paymentModes)[number];

function PremiumPaymentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showCardDetailsModal, setShowCardDetailsModal] = useState(false);

  const handlePaymentModeClick = (mode: PaymentMode) => {
    if (mode === "Debit Card (PayStack)" || mode === "Flutter wave") {
      setShowCardDetailsModal(true);
    }
  };
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
      contentLabel="Premium Payment Modal"
      ariaHideApp={false}
    >
      <div className="rounded-[10px] bg-white px-7 pb-7 pt-8">
        {showCardDetailsModal && (
          <CardDetailsModal
            isOpen={showCardDetailsModal}
            setIsOpen={setShowCardDetailsModal}
          />
        )}
        <div className="flex flex-col gap-5">
          {paymentModes.map((mode) => (
            <PaymentCard
              key={mode}
              mode={mode}
              handleClick={() => handlePaymentModeClick(mode)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default PremiumPaymentModal;
