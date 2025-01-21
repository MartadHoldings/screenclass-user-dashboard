"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { inter, publicSans } from "./fonts";
import { IoClose } from "react-icons/io5";
import Navlinks from "./nav-links";
import Image from "next/image";
import Link from "next/link";

const MobileSideNav = () => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowMobileSideNav(true)}
        className="block cursor-pointer pl-2 xl:hidden"
      >
        <GiHamburgerMenu size={24} />
      </div>
      <AnimatePresence>
        {showMobileSideNav && (
          <motion.div>
            {/* mobile sidebar backdrop */}
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: 0 }}
              exit={{ left: "-100%" }}
              transition={{ duration: 0.5 }}
              className={`fixed inset-0 z-10 bg-black/60 xl:hidden`}
            ></motion.div>
            {/* mobile sidebar */}
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: 0 }}
              exit={{ left: "-100%" }}
              transition={{ duration: 0.5 }}
              className={`fixed bottom-0 top-0 z-20 flex min-h-screen w-64 flex-col bg-white py-4 xl:hidden`}
              style={{ height: "100vh" }}
            >
              <div
                onClick={() => setShowMobileSideNav(false)}
                className={`${publicSans.className} ml-auto mr-3 cursor-pointer rounded-full bg-SC-Brand-Blue px-1 py-1`}
              >
                <IoClose size={20} color="white" />
              </div>
              {/* sm screen logo */}
              <div className="flex items-center justify-center md:hidden">
                <Link href={"/"}>
                  <Image
                    src={"/guardian/screenclass-logo.svg"}
                    alt="logo"
                    width={150}
                    height={29}
                  />
                </Link>
              </div>
              {/* sm screen profile details */}
              <div className="mt-3 flex items-center gap-3 px-3 py-2 md:hidden md:gap-[18px]">
                <Image
                  src={"/guardian/ellipse.svg"}
                  alt="ellipse"
                  width={80}
                  height={80}
                  className="h-auto w-14 md:w-[80px]"
                />
                <div className="">
                  <p className="segoe text-base text-[#7C7C7C] lg:text-lg">
                    SC51124
                  </p>
                  <p className="segoe text-base text-SC-Orange lg:text-lg">
                    Guardian
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between">
                <div className="mt-5 md:space-y-10">
                  {/* md/lg screen logo */}
                  <div className="hidden items-center justify-center md:flex">
                    <Link href={"/"}>
                      <Image
                        src={"/guardian/screenclass-logo.svg"}
                        alt="logo"
                        width={150}
                        height={29}
                      />
                    </Link>
                  </div>
                  <Navlinks />
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex h-[150px] w-[170px] flex-col items-center justify-between rounded-[10px] bg-SC-Light-Blue/20 pb-3">
                    <Image
                      src={"/guardian/brazuca-planning.svg"}
                      alt="brazuca planning"
                      width={82}
                      height={54}
                      className="-mt-6"
                    />
                    <p
                      className={`${publicSans.className} text-center text-sm text-[rgba(27,27,27,0.8)]`}
                    >
                      Upgrade to <span className="font-bold">PRO</span> for
                      maximum benefits
                    </p>
                    <button
                      className={`${inter.className} h-[35px] w-[100px] rounded-[10px] bg-SC-Orange/80 text-xs font-bold text-white`}
                    >
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSideNav;
