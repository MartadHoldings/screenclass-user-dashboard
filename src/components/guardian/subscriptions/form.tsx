"use client";
import React from "react";
import Select from "react-select";

function SubscriptionForm() {
  return (
    <form className="mt-12">
      <label htmlFor="plan" className="segoe text-sm text-[#1B1B1B]/90">
        Choose Plan
      </label>
      <Select
        id="plan"
        className="segoe mt-1 text-xs font-light text-[#1B1B1B]/70"
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
      <button className="rounded bg-SC-Blue w-full h-11 segoe text-white font-semibold text-[15px] mt-12">Subscribe</button>
    </form>
  );
}

export default SubscriptionForm;
