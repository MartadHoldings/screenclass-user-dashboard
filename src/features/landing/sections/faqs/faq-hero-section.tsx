"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "../../components";

export const FAQHeroSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 91);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="bg-bg-faq-hero-sm lg:bg-bg-faq-hero min-h-fit w-full bg-cover bg-center bg-no-repeat">
      <Header />
      {/* Spacer to prevent layout shift */}
      {isSticky && <div className="h-[83px] w-full border-2 border-black" />}
      <div className="relative mx-auto flex min-h-[calc(100dvh-83px)] w-full max-w-screen-xl flex-col items-center px-8 max-sm:pb-12 lg:flex-row lg:px-[3.5rem]">
        <div className="mt-3 w-fit">
          <h2 className="text-2xl font-normal capitalize text-black lg:text-5xl">
            Frequently <br /> Asked{" "}
            <span className="font-bold text-[#0B67B0]"> question</span>
          </h2>
          <p className="mt-6 max-w-[475px] text-xs font-normal text-black md:text-sm lg:text-base">
            We empower students with 21st century skill: Join our E-lerrning
            community and unlock your potential. Screenclass Is a management
            stystem (LMS) Developed to meet and suit the learning process.
          </p>
        </div>
      </div>
    </section>
  );
};
