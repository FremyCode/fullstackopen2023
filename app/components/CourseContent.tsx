"use client";
import React from "react";
import { CoursesProps, Course, Part } from "../types";

export const CourseContent = ({ content } : CoursesProps) => {
  return (
    <>
      {content.map((course: Course, index: number) => (
        <div key={index}>
          <h1 className="texl-xl font-bold p-2">{course.name}</h1>
          {course.parts.map((part: Part, index: number) => (
            <div key={index} className="flex">
              <p className="text-sm p-2">{part.name}</p>
              <p className="text-sm p-2 font-bold">{part.exercises}</p>
            </div>
          ))}
        </div>
      ))}
      
    </>
  );
};
