"use client";
import React from "react";
import { CourseContentProps, CourseContentItem } from "../types";

export const CourseContent = ({ content }: CourseContentProps) => {
  return (
    <>
      {content.map((contentItem: CourseContentItem, index: number) => (
        <p key={index}>
          {contentItem.part} {contentItem.exercises}
        </p>
      ))}
    </>
  );
};
