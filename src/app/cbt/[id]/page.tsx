import React from "react";
import { QuizQuestion } from "@/features/cbt";
import { englishComprehensionQuestions, randomizeArray } from "@/utils";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const randomizedQuestions = randomizeArray(englishComprehensionQuestions);
  const sliceQuestions = randomizedQuestions.slice(10);
  const currentQuestion = sliceQuestions[id];
  const totalQuestions = sliceQuestions.length;

  const quizDuration = convertToSeconds("00:30:30");

  function convertToSeconds(duration: string): number {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  console.log(currentQuestion);
  return (
    <div>
      <QuizQuestion
        currentQuestion={currentQuestion}
        currentPage={id}
        totalQuestions={totalQuestions}
        quizDuration={quizDuration}
      />
    </div>
  );
};

export default page;
