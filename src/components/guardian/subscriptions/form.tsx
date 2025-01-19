"use client";
import PremiumPaymentModal from "@/components/modal/PaymentModesModal";
import PremiumPlans from "@/components/modal/PremiumPlansModal";
import Image from "next/image";
import React, { useState } from "react";

function SubscriptionForm() {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const [showPremiumPlansModal, setShowPremiumPlansModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  return (
    <div className="mt-12">
      {showPremiumPlansModal && (
        <PremiumPlans
          isOpen={showPremiumPlansModal}
          setIsOpen={setShowPremiumPlansModal}
          setSelectedPlan={setSelectedPlan}
        />
      )}
      {showPaymentModal && (
        <PremiumPaymentModal
          isOpen={showPaymentModal}
          setIsOpen={setShowPaymentModal}
        />
      )}
      <p className="segoe text-sm text-[#1B1B1B]/90">Choose Plan</p>
      <div
        onClick={() => setShowPremiumPlansModal(true)}
        className="segoe mt-1 flex h-[35px] cursor-pointer items-center justify-between rounded-md border border-[#ccc] bg-transparent pl-5 pr-3 text-xs font-light text-[#1B1B1B]/70"
      >
        <p>{selectedPlan}</p>
        <Image
          src={"/guardian/arrow-down.svg"}
          alt="arrow down"
          width={18}
          height={18}
        />
      </div>
      <button
        onClick={() => setShowPaymentModal(true)}
        className="segoe mt-12 h-11 w-full rounded bg-SC-Blue text-[15px] font-semibold text-white"
      >
        Subscribe
      </button>
    </div>
  );
}

export default SubscriptionForm;
