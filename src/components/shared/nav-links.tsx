"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DashboardIcon from "../../../public/guardian/dashboard-icon.svg";
import StudentsIcon from "../../../public/guardian/people-icon.svg";
import ManageStudentsIcon from "../../../public/guardian/manage-students-icon.svg";
import ProfileIcon from "../../../public/guardian/profile-icon.svg";
import { publicSans } from "./fonts";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Dashboard",
    href: "/guardian",
    iconSrc: DashboardIcon,
  },
  {
    id: 2,
    name: "My Students",
    href: "/guardian/my-students",
    iconSrc: StudentsIcon,
  },
  {
    id: 3,
    name: "Manage Students",
    href: "/guardian/dashboard/manage-students",
    iconSrc: ManageStudentsIcon,
  },
  {
    id: 4,
    name: "My Profile",
    href: "/guardian/dashboard/profile",
    iconSrc: ProfileIcon,
  },
];

function Navlinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-10 pl-6">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="flex items-center gap-8"
        >
          <Image src={link.iconSrc} alt={link.name} width={24} height={24} />
          <p
            className={`${publicSans.className} text-xl ${link.href.endsWith(pathname) ? "font-bold" : "font-normal"} pr-2`}
          >
            {link.name}
          </p>
          {link.href === pathname && (
            <div className="bg-SC-Deep-Blue h-[30px] w-[3px] ml-auto" />
          )}
        </Link>
      ))}
    </div>
  );
}

export default Navlinks;
