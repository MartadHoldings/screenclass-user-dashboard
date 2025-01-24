"use client";

import React, { useState, useEffect } from "react";
import { QuizContainer, RadioButton, Pagination } from "@/components/cbt";
import CalculatorModal from "@/components/modal/CBTExamsCalculator";
import Image from "next/image";

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
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

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
    <QuizContainer
      title="Importance of Recreation"
      timeRemaining={formatTime(remainingTime)}
      className="relative"
    >
      <div className="flex w-full flex-col gap-y-5 p-10">
        <div className="flex w-full flex-col justify-between gap-y-6 md:flex-row md:gap-y-0">
          <div className="flex flex-col gap-y-2 max-sm:order-2">
            <p className="text-base font-semibold text-black first-letter:capitalize">
              {question}
            </p>
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
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="self-start rounded-lg max-sm:order-1 max-sm:self-end"
          >
            <Image
              src="/icons/calculator-icon.svg"
              alt="calculator icon"
              width={50}
              height={50}
            />
          </button>
        </div>

        <div className="absolute bottom-[3rem] left-0 grid w-full place-items-center px-6">
          <Pagination
            totalPages={totalQuestions}
            currentPage={currentPage}
            isSelected={!!selectedOption}
          />
        </div>

        <CalculatorModal
          isOpen={isCalculatorOpen}
          setIsOpen={setIsCalculatorOpen}
        />
      </div>
    </QuizContainer>
  );
};
