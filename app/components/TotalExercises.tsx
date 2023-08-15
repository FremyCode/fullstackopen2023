"use client";
import React, { useEffect, useState } from "react";
import { CourseContentProps } from "../types";

export const TotalExercises = ({ content }: CourseContentProps) => {
  const [TotalExercises, setTotalExercises] = useState<number>(0);

  function countExercises() {
    content.forEach((contentItem) => {
      setTotalExercises(TotalExercises + contentItem.exercises);
    });
  }

  useEffect(() => {
    countExercises();
  }, []);

  return <div>{TotalExercises}</div>;
};
