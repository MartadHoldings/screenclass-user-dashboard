/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import Myclass from "../assets/class.svg";
import subject from "../assets/subject.svg";
import quiz from "../assets/quiz.svg";
import sub from "../assets/sub.svg";
import trivia from "../assets/trivia.svg";
import game from "../assets/game.svg";
import profile from "../assets/profile.svg";
import pro from "../assets/pro.svg";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 15 ? setIsActive(true) : setIsActive(false);
    });
  });

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className="bg-[#ffffff] tracking-wide">
      <div id="sidebar" className="relative hidden flex-col sm:flex">
        <div
          id="top"
          className="flex h-[150px] w-[250px] items-center justify-center bg-clip-text"
        >
          <Link href="/student">
            <Image
              src={logo}
              alt="logo"
              layout="fill"
              className="relative mt-16 max-h-[70px] max-w-[200px] pl-10"
            />
          </Link>
        </div>
        <div className="mb-28 pl-8">
          <div className="flex flex-col space-y-6">
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={dashboard}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[18px] max-w-[18px]"
                />
                <span className="ml-2 text-xl font-semibold text-[#082038]">
                  Dashboard
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={Myclass}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  My Class
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={subject}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  Subjects
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={quiz}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  Take Quiz
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={sub}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  Subscriptions
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={trivia}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  Trivia
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={game}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  Games
                </span>
              </li>
            </Link>
            <Link href="/student">
              <li className="flex cursor-pointer items-center gap-4 p-2">
                <Image
                  src={profile}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[23px] max-w-[23px]"
                />
                <span className="ml-2 text-xl font-normal text-[#082038]">
                  My profile
                </span>
              </li>
            </Link>
          </div>
          <div className="mt-28 h-[200px] w-[170px] rounded-xl bg-[#ceecf1]">
            <div className="flex h-full flex-col items-center justify-around gap-y-5">
              <Image
                src={pro}
                alt="logo"
                width={100}
                height={100}
                className="absolute bottom-[275px]"
              />
              <h2 className="mt-20 text-center text-sm font-medium leading-4">
                Upgrade to <span className="font-semibold">PRO</span> for
                maximum benefits
              </h2>
              <div className="text-center font-semibold text-white">
                <button className="rounded-md bg-[#0966AB] px-4 py-1 text-sm">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen configuration */}
      <div
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
        } fixed z-50 flex w-full items-center justify-between border-b border-gray-900 p-5 transition-all md:hidden lg:hidden`}
      >
        <Link href="/student">
          <Image
            src={logo}
            alt="logo"
            layout="fill"
            className="relative mt-0 max-h-[70px] max-w-[170px] pl-5"
          />
        </Link>

        <div className="mr-1 text-2xl">
          <button onClick={toggleSidebar} className="">
            {sidebar ? (
              <CloseIcon className="text-gray-900" />
            ) : (
              <MenuIcon className="text-gray-900" />
            )}
          </button>
        </div>
      </div>
      {!isActive && sidebar && (
        <div
          className={`fixed right-1 top-[66px] z-20 flex h-[540px] w-56 flex-col justify-center overflow-y-scroll overscroll-none rounded-md border-b border-l bg-white p-3`}
        >
          <div className="min-h-[100%]">
            <div className="flex flex-col space-y-6">
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={dashboard}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[18px] max-w-[18px]"
                  />
                  <span className="ml-2 text-xl font-semibold text-[#082038]">
                    Dashboard
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={Myclass}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    My Class
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={subject}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    Subjects
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={quiz}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    Take Quiz
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={sub}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    Subscriptions
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={trivia}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    Trivia
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={game}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    Games
                  </span>
                </li>
              </Link>
              <Link href="/student">
                <li className="flex cursor-pointer items-center gap-4 p-2">
                  <Image
                    src={profile}
                    alt="logo"
                    width={100}
                    height={100}
                    className="max-h-[23px] max-w-[23px]"
                  />
                  <span className="ml-2 text-xl font-normal text-[#082038]">
                    My profile
                  </span>
                </li>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* {isActive && !sidebar} */}
    </nav>
  );
};

export default Sidebar;
