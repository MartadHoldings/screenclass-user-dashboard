"use client";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Image from "next/image";
import student from "../assets/student.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { learning, learningItems, quiz, subject } from "./data";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
      <div className="mt-24 flex w-full items-center justify-between px-4 sm:mt-16 sm:px-7">
        <h1 className="text-xl font-bold text-[#082038]">Dashboard</h1>
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-md font-extralight text-[#082038] opacity-50">
            09 June, 2023
          </h1>
          <div className="rounded-md bg-[#9698D54D] p-1">
            <SearchOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center p-4 sm:mt-0 sm:p-7">
        <div className="flex h-full w-full flex-col items-center justify-between rounded-[2rem] bg-[#F7631B4D] p-6 sm:flex-row md:p-2 lg:p-6">
          <div className="relative left-0 flex flex-col sm:left-7">
            <h2 className="md: text-center text-3xl font-semibold text-[#F65F74] sm:text-start md:text-[28px] lg:text-5xl">
              Welcome back Ifeoluwa!
            </h2>
            <h2 className="mt-5 max-w-[370px] text-center text-lg opacity-60 sm:text-start">
              You{"'"}ve learned 80% of your goal this week! keep it up and
              improve your result
            </h2>
          </div>
          <div>
            <Image
              src={student}
              alt="logo"
              width={1}
              height={1}
              className="relative right-0 mt-4 min-h-[200px] min-w-[300px] sm:right-10 sm:mt-0 md:min-w-[250px] lg:min-w-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-6 sm:px-10">
        <div className="flex h-full w-full flex-col items-start justify-start space-y-8 md:h-full md:flex-col md:space-y-8 lg:h-[400px] lg:flex-row lg:space-x-6 lg:space-y-0">
          <div className="flex w-full flex-col items-start">
            <h2 className="mt-4 text-xl font-bold sm:mt-0">Latest Quiz</h2>
            {quiz.map((item, index) => (
              <div
                className="flex w-full items-center space-x-2 border-b border-gray-400 border-opacity-50 py-5"
                key={index}
              >
                <h2 className="w-full text-[13px] font-bold sm:text-lg">
                  {item.subject} {"-"}
                  <span className="font-normal opacity-50"> {item.topic}</span>
                </h2>
                <div className="h-[5px] w-full rounded-lg bg-neutral-200 dark:bg-gray-300">
                  <div
                    className={`${item.percentNum < 50 ? "bg-red-500" : "bg-green-500"} h-[5px] rounded-l-lg`}
                    style={{ width: `${item.percent}` }}
                  ></div>
                </div>
                <h2>{item.percent}</h2>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg font-bold sm:text-xl">
                Time Spent on Learning
              </h2>
              <h2 className="text-sm font-normal">
                Last Week <KeyboardArrowDownOutlinedIcon />
              </h2>
            </div>
            <div className="flex w-full items-center space-x-0 sm:mt-4 sm:space-x-6">
              {learning.map((items) => (
                <div
                  key={items.id}
                  className="flex h-full w-full flex-col items-center py-4"
                >
                  <h2 className="mb-3">{items.day}</h2>
                  <div className="relative flex h-[300px] w-[5px] flex-col items-end justify-center overflow-hidden rounded bg-[#DFDFDF]">
                    {/* arrange in desceding order (the lowest percentage to the highest) */}
                    <span className={`h-[20%] w-full bg-[#DFDFDF]`}></span>
                    <span className={`h-[20%] w-full bg-[#EC8694]`}></span>
                    <span className={`h-[60%] w-full bg-[#6C72FF]`}></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-center space-x-2 sm:space-x-4">
              {learningItems.map((learn) => (
                <div
                  key={learn.id}
                  className="flex items-center space-x-1 sm:space-x-2"
                >
                  <div
                    className={`h-3 w-3 rounded-xl bg-[${learn.color}]`}
                  ></div>
                  <h2 className="text-[10px] text-gray-500 sm:text-[14px]">
                    {learn.subject}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full items-center justify-between px-7 lg:mt-20">
        <h1 className="text-lg font-bold text-[#082038]">Your Subjects</h1>
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-md font-bold text-[#082038]">More</h1>
          <div className="">
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-around space-y-4 p-7 sm:flex-row sm:space-x-5 sm:space-y-0 md:mb-10">
        {subject.map((subj) => (
          <div
            key={subj.id}
            className={`flex w-full items-center justify-start gap-4 rounded-lg bg-[${subj.color}] px-[8px] py-3 text-white`}
          >
            <div className="ml-3 flex size-16 items-center justify-center rounded-[15px] bg-[#D9D9D938]">
              <h2>{subj.score}</h2>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[#D9D9D9]">{subj.topic}</p>
              <div className="flex items-center space-x-2">
                <p className="text-md font-bold">{subj.subject}</p>
                <EastOutlinedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
