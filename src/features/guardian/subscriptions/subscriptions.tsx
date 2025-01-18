import SubscriptionForm from "@/components/guardian/subscriptions/form";
import Header from "@/components/shared/header";
import React from "react";

export const Subscriptions = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f1f1f1]">
      <div className="mx-7 flex min-h-screen w-full flex-col bg-[#FAFAFA] pl-9 pr-4">
        <Header title="Plan Subscriptions" />
        <div className="h-full">
          <h2 className="segoe my-4 text-xl text-[#1B1B1B]">Subscribe</h2>
          <div className="flex items-center justify-center">
            <div
              className="bg-white px-8 pb-24 pt-6"
              style={{
                boxShadow: "0px 0px 10px -4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h2 className="segoe text-xl font-bold text-[#1B1B1B]">
                Choose Your Plan
              </h2>
              <p className="segoe text-xs font-light italic text-[#1b1b1b]/80">
                (Upgrade your plan to Premium plan to enjoy more of our
                explanatory videos)
              </p>
             <SubscriptionForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
