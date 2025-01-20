import PersonalDetailsForm from "@/components/guardian/settings/personal-details-form";
import SecurityDetails from "@/components/guardian/settings/security-details";
import Header from "@/components/shared/header";
import React from "react";

export const Settings = () => {
  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="mx-7 min-h-screen bg-[#FAFAFA] pb-40 pl-9 pr-4">
        <Header title="Account Settings" />
        <PersonalDetailsForm action="edit" />
        <SecurityDetails />
      </div>
    </div>
  );
};
