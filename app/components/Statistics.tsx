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
      <h2 className="text-xl font-bold py-2 ">Statistics</h2>
      {feedbackTotal() > 0 ? (
        <div>
          <table>
            {feedbackStats.map((feedback, index) => (
              <tr key={index}>
                <th className="w-32">{feedback.label}</th>
                <td>{feedback.value}</td>
              </tr>
            ))}
            <tr>
              <th className="w-32">All</th>
              <td>{feedbackTotal()}</td>
            </tr>
            <tr>
              <th className="w-32">Average</th>
              <td>{feedbackAverage()}</td>
            </tr>
            <tr>
              <th className="w-32">Positive</th>
              <td>{positiveFeedbacks()}</td>
            </tr>
          </table>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
