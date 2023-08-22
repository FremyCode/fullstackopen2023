"use client";
import React, { useEffect, useState } from "react";
import { CoursesProps, Course, Part } from "../types";

export const TotalExercises = ({ content }: CoursesProps) => {
  const [TotalExercises, setTotalExercises] = useState<number>(0);

  function countExercises() {
    const totalExercises = content.reduce((total: number, course: Course) => {
      const courseExercises = course.parts.reduce(
        (partTotal, part) => partTotal + part.exercises,
        0,
      );
      return courseExercises + total;
    }, 0);
    setTotalExercises(totalExercises);
  }

  useEffect(() => {
    countExercises();
  }, [content]);

  return <p className="p-2 font-bold">Total of {TotalExercises} exercises</p>;
};
