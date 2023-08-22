"use client";
import React from "react";
import { CourseContentProps, CourseContentItem } from "../types";

export const CourseContent = ({ content } : CourseContentProps) => {
  return (
    <>
      {content.map((course: CourseContentProps, index: number) => (
        <div key={index}>
          <h1 className="texl-xl font-bold p-2">{course.name}</h1>
          {course.parts.map((part: CourseContentItem, index: number) => (
            <div key={index}>
              <p className="text-sm p-2">{part.name}</p>
            </div>
          ))}
        </div>
      ))}
      
    </>
  );
};
