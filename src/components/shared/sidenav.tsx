import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlinks from "./nav-links";
import { publicSans } from "./fonts";
import { inter } from "./fonts";

function SideNav() {
  return (
    <div className="fixed flex min-h-screen h-full overflow-y-scroll flex-col justify-between gap-28 2xl:gap-0 py-20">
      <div className="space-y-20">
        {/* logo */}
        <div className="flex items-center justify-center">
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
      <div className="flex justify-center items-center">
        <div className="flex h-[200px] w-[170px] flex-col items-center justify-between rounded-[10px] bg-SC-Light-Blue/20 pb-3">
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
            Upgrade to <span className="font-bold">PRO</span> for maximum
            benefits
          </p>
          <button
            className={`${inter.className} h-[35px] w-[100px] rounded-[10px] bg-SC-Orange/80 text-xs font-bold text-white`}
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
