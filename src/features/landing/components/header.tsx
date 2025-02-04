"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./navbar";

const navLink = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#",
    label: "Pricing",
  },
  { link: "#", label: "Contact Us" },
  { link: "#", label: "About Us" },
  { link: "#", label: "FAQs" },
];

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 91);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full ${isSticky ? "fixed top-0 bg-[#F6F6F6]" : "bg-transparent"} z-40 h-[83px]`}
    >
      <Navbar
        links={navLink}
        logoSrc={
          isSticky
            ? "/images/screenclass-logo.png"
            : "/images/screenclass-logo-white.png"
        }
        isSticky={isSticky}
      />
    </header>
  );
};
