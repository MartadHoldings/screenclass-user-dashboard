"use client";

import React, { useState, useEffect } from "react";
import { QuizQuestion } from "@/features/cbt";
import {
  englishComprehensionQuestions,
  randomizeArray,
  Questions,
} from "@/utils";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();
  const id = parseInt(params.id, 10);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Questions>([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem("randomizedQuestions");
    const storedTime = localStorage.getItem("lastUpdatedTime");
    const currentTime = Date.now();

    if (storedQuestions && storedTime) {
      const timeDifference = (currentTime - parseInt(storedTime, 10)) / 1000;

      if (timeDifference < 15 * 60) {
        setRandomizedQuestions(JSON.parse(storedQuestions));
        return;
      }
    } else {
      // const newQuestions = randomizeArray(englishComprehensionQuestions);
      // setRandomizedQuestions(newQuestions);
      // localStorage.setItem("randomizedQuestions", JSON.stringify(newQuestions));
      const newQuestions = randomizeArray(englishComprehensionQuestions);
      setRandomizedQuestions(newQuestions);
      localStorage.setItem("randomizedQuestions", JSON.stringify(newQuestions));
      localStorage.setItem("lastUpdatedTime", currentTime.toString());
    }
  }, []);

  const sliceQuestions = randomizedQuestions.slice(0, 10);
  const currentQuestion = sliceQuestions[id - 1];
  const totalQuestions = sliceQuestions.length;

  const quizDuration = convertToSeconds("00:30:30");

  function convertToSeconds(duration: string): number {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  // Check if currentQuestion is defined
  if (!currentQuestion) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

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

export default Page;

// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// // Question interface
// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }
// type Questions = Question[];

// // Example questions array
// const englishComprehensionQuestions: Questions = [
//   {
//     id: 1,
//     question: "What is React?",
//     options: ["Library", "Framework", "Language"],
//     correctAnswer: "Library",
//   },
//   {
//     id: 2,
//     question: "What is JSX?",
//     options: ["Syntax", "Tool", "Library"],
//     correctAnswer: "Syntax",
//   },
//   // Add more questions...
// ];

// const randomizeArray = (array: Questions): Questions =>
//   [...array].sort(() => Math.random() - 0.5);

// const QuizComponent: React.FC = () => {
//   const params = useParams<{ id: string }>();
//   const id = parseInt(params.id || "1", 10);
//   const [randomizedQuestions, setRandomizedQuestions] = useState<Questions>([]);
//   // const [responses, setResponses] = useState<string[]>([]);

//   useEffect(() => {
//     const updateQuestionsIfNeeded = () => {
//       const storedQuestions = localStorage.getItem("randomizedQuestions");
// const storedTime = localStorage.getItem("lastUpdatedTime");
// const currentTime = Date.now();

// if (storedQuestions && storedTime) {
//   const timeDifference = (currentTime - parseInt(storedTime, 10)) / 1000;

//   if (timeDifference < 15 * 60) {
//     setRandomizedQuestions(JSON.parse(storedQuestions));
//     return;
//   }
// }

//       // Randomize questions and save to localStorage
// const newQuestions = randomizeArray(englishComprehensionQuestions);
// setRandomizedQuestions(newQuestions);
// localStorage.setItem("randomizedQuestions", JSON.stringify(newQuestions));
// localStorage.setItem("lastUpdatedTime", currentTime.toString());
//     };

//     updateQuestionsIfNeeded();

//     // Load responses from localStorage
//     const storedResponses = JSON.parse(
//       localStorage.getItem("responses") || "[]",
//     );
//     setResponses(storedResponses || []);
//   }, []);

//   useEffect(() => {
//     // Save responses to localStorage whenever they change
//     localStorage.setItem("responses", JSON.stringify(responses));
//   }, [responses]);

//   const handleResponse = (questionId: number, answer: string) => {
//     setResponses((prevResponses) => {
//       const updatedResponses = [...prevResponses];
//       updatedResponses[questionId - 1] = answer; // Save response by question index
//       return updatedResponses;
//     });
//   };

//   const sliceQuestions = randomizedQuestions.slice(0, 10);
//   const currentQuestion = sliceQuestions[id - 1];
//   const totalQuestions = sliceQuestions.length;

//   const quizDuration = convertToSeconds("00:30:30");

//   function convertToSeconds(duration: string): number {
//     const [hours, minutes, seconds] = duration.split(":").map(Number);
//     return hours * 3600 + minutes * 60 + seconds;
//   }

//   if (!currentQuestion) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   return (
//     <div>
//       <h2>
//         Question {id} of {totalQuestions}
//       </h2>
//       <p>{currentQuestion.question}</p>
//       <ul>
//         {currentQuestion.options.map((option, index) => (
//           <li key={index}>
//             <button
//               onClick={() => handleResponse(currentQuestion.id, option)}
//               className={`${
//                 responses[currentQuestion.id - 1] === option
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               } rounded px-4 py-2`}
//             >
//               {option}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <p>Quiz Duration: {quizDuration} seconds</p>
//       </div>
//     </div>
//   );
// };

// export default QuizComponent;
