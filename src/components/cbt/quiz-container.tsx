"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface QuizContainerProps {
  title: string;
  height?: string;
  className?: string;
  timeRemaining: string;
  children: React.ReactNode;
}

export const QuizContainer = ({
  title,
  height,
  className,
  timeRemaining,
  children,
}: QuizContainerProps) => {
  const router = useRouter();
  return (
    <div
      className={`${height || "h-full"} w-full overflow-clip rounded-lg ${className}`}
    >
      <div className="flex w-full items-center justify-between bg-gray-200 px-6 py-3">
        <div onClick={() => router.back()}>
          <Image
            src="/icons/arrow-left-icon.png"
            alt="arrow-left-icon"
            width={24}
            height={24}
          />
        </div>
        <h4 className="text-base font-semibold capitalize text-black">
          {title}
        </h4>

        <p className="text-sm font-medium capitalize text-black">
          {timeRemaining}
        </p>
      </div>
      <div className="clex-1 h-full min-h-[595px] w-full bg-white px-6">
        {children}
      </div>
    </div>
  );
};
