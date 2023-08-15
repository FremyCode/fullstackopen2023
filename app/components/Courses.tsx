"use client";
import React from "react";
import { CourseContent } from "./CourseContent";
import { CourseHeader } from "./CourseHeader";
import { TotalExercises } from "./TotalExercises";

export const Courses = () => {
  const course = "Half Stack application development";
  const courseContent = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <CourseHeader course={course} />
      <CourseContent content={courseContent} />
      <TotalExercises content={courseContent} />
    </div>
  );
};
