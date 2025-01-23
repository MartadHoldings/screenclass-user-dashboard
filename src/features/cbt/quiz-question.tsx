"use client";

import React, { useState, useEffect } from "react";
import { Container, RadioButton, Pagination } from "@/components/cbt";

type Question = {
  options: string[];
  answer: string;
  question: string;
};

interface QuizQuestionProps {
  currentQuestion: Question;
  currentPage: number;
  totalQuestions: number;
  quizDuration: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  currentQuestion,
  currentPage,
  totalQuestions,
  quizDuration,
}) => {
  const { answer, options, question } = currentQuestion;
  // const [ currentAnswer, setCurrentAnswer ]
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [remainingTime, setRemainingTime] = useState<number>(quizDuration);

  // Countdown Timer Logic
  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);

  // Format time to "hh:mm:ss"
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${secs}`;
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  return (
    <Container title="Recreation of love" className="relative">
      <div className="flex w-full flex-col gap-y-5 pt-10">
        <p className="text-base font-semibold text-black first-letter:capitalize">
          {question}
        </p>
        <div className="flex flex-col gap-y-2">
          {options.map((option) => (
            <RadioButton
              key={option}
              name={option}
              label={option}
              value={option}
              onChange={handleOptionChange}
            />
          ))}
        </div>

        <div className="absolute bottom-[3rem] left-0 w-full translate-x-[12.5%] px-6">
          <Pagination totalPages={totalQuestions} currentPage={currentPage} />
        </div>

        {/* Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 w-full px-6">
          <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="absolute bottom-12 left-0 w-full px-6">
              <p className="text-center text-sm font-semibold text-black">
                Remaining Time: {formatTime(remainingTime)}
              </p>
            </div>
          </div>
        </div> */}

        <div className="absolute bottom-0 left-0 w-full px-6">
          <div className="relative w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
              style={{
                width: `${((quizDuration - remainingTime) / quizDuration) * 100}%`,
              }}
            >
              {Math.round(
                ((quizDuration - remainingTime) / quizDuration) * 100,
              )}
              %
            </div>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-black">
              Remaining Time: {formatTime(remainingTime)}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
