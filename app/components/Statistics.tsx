import React from "react";
import { FeedbackProps, FeedbackItem } from "../types";

export const Statistics = ({ feedbackStats }: FeedbackProps) => {
  //Calculates the total amount of votes from the array's item values

  function feedbackTotal() {
    return feedbackStats.reduce((total: number, item) => total + item.value, 0);
  }

  //Return the feedback average
  //Good votes = 1
  //Neutral votes = 0
  //Bad votes = -1

  function feedbackAverage() {
    let goodValue = 0;
    let badValue = 0;

    feedbackStats.map((item) => {
      if (item.label == "Bad") {
        badValue = item.value;
      }
      if (item.label == "Good") {
        goodValue = item.value;
      }
    });

    return ((goodValue - badValue) / feedbackTotal())
      .toString()
      .substring(0, 4);
  }

  function positiveFeedbacks() {
    let goodValue = 0;

    feedbackStats.map((item) => {
      if (item.label == "Good") {
        goodValue = item.value;
      }
    });

    return (
      ((goodValue / feedbackTotal()) * 100).toString().substring(0, 4) + "%"
    );
  }
  return (
    <div className="text-left">
      <h2 className="text-xl font-bold ">Statistics</h2>
      {feedbackTotal() > 0 ? (
        <div className="">
          {feedbackStats.map((feedback, index) => (
            <p key={index}>
              {feedback.label} {feedback.value}
            </p>
          ))}
          <p>All</p>
          <div>{feedbackTotal()}</div>
          <p>Average {feedbackAverage()}</p>
          <p>Positive {positiveFeedbacks()}</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
