"use client";
import React, { useEffect, useState } from "react";
import { CourseContentProps } from "../types";

export const TotalExercises = ({ parts }: CourseContentProps) => {
  const [TotalExercises, setTotalExercises] = useState<number>(0);

  function countExercises() {
    const total = parts.reduce((accumulator, content) => accumulator + content.exercises, 0)
    setTotalExercises(total)
  }

  useEffect(() => {
    countExercises();
  }, [content]);

  return <p className="p-2 font-bold">Total of {TotalExercises} exercises</p>;
};
