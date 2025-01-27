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
  const id = parseInt(params?.id || "1", 10);

  const [randomizedQuestions, setRandomizedQuestions] = useState<Questions>([]);
  const [responses, setResponses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateQuestions = () => {
      const storedQuestions = localStorage.getItem("randomizedQuestions");
      const storedTime = localStorage.getItem("lastUpdatedTime");
      const storedResponses = localStorage.getItem("responses");
      const currentTime = Date.now();

      if (storedQuestions && storedTime && storedResponses) {
        try {
          const timeDifference =
            (currentTime - parseInt(storedTime, 10)) / 1000;

          // Load from local storage if updated within 15 minutes
          if (timeDifference < 15 * 60) {
            setRandomizedQuestions(JSON.parse(storedQuestions));
          }

          // Load responses from local storage
          setResponses(JSON.parse(storedResponses));
        } catch (error) {
          console.error("Error parsing data from local storage", error);
        }
      } else {
        // Randomize questions and save to local storage
        const newQuestions = randomizeArray(englishComprehensionQuestions);
        setRandomizedQuestions(newQuestions);
        localStorage.setItem(
          "randomizedQuestions",
          JSON.stringify(newQuestions),
        );
        localStorage.setItem("lastUpdatedTime", currentTime.toString());
      }

      setLoading(false); // Set loading state to false after data is processed
    };

    updateQuestions();
  }, []);

  const recordResponse = (value: string) => {
    setResponses((prevResponses) => [...prevResponses, value]);
    localStorage.setItem("responses", JSON.stringify([...responses, value]));
  };

  const updateResponse = (value: string) => {
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[id - 1] = value;
      localStorage.setItem("responses", JSON.stringify(updatedResponses));
      return updatedResponses;
    });
  };

  // Slice and get the current question
  const sliceQuestions = randomizedQuestions.slice(0, 10);
  const currentQuestion = sliceQuestions[id - 1];
  const totalQuestions = sliceQuestions.length;

  const quizDuration = convertToSeconds("00:30:30");

  function convertToSeconds(duration: string): number {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  // Show a loading state if questions are still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle invalid question or ID edge case
  if (!currentQuestion) {
    return (
      <div>
        <h2>Question not found</h2>
        <p>Please check the URL or reload the page.</p>
      </div>
    );
  }

  return (
    <div>
      <QuizQuestion
        currentQuestion={currentQuestion}
        currentPage={id}
        totalQuestions={totalQuestions}
        quizDuration={quizDuration}
        respones={responses}
        responseActions={{ recordResponse, updateResponse }}
      />
    </div>
  );
};

export default Page;
