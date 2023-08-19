"use client";
import React, { useState } from "react";
import { FeedbackButton } from "./buttons/FeedbackButton";
import { Statistics } from "./Statistics";

export const Unicafe = () => {
  const [feedbackStats, setFeedbackStats] = useState([
    { label: "Good", value: 0 },
    { label: "Neutral", value: 0 },
    { label: "Bad", value: 0 },
  ]);

  //Handles adding +1 to value if the label matches the button clicked

  function handleClick(label: string) {
    const newFeedbackStats = [...feedbackStats];

    feedbackStats.map((item) => {
      if (label == item.label) {
        return (item.value += 1);
      }
    });

    setFeedbackStats(newFeedbackStats);
  }

  return (
    <div className="mx-5">
      <h1 className="py-5">Give feedback</h1>
      <div className="pb-5">
        <FeedbackButton label="Good" onClick={handleClick} />
        <FeedbackButton label="Neutral" onClick={handleClick} />
        <FeedbackButton label="Bad" onClick={handleClick} />
      </div>
      <Statistics feedbackStats={feedbackStats} />
    </div>
  );
}
