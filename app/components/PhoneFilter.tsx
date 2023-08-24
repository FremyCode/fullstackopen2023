"use client";
import React, { useState } from "react";

export const PhoneFilter = ({
  filterInput,
  onFilterChange,
}: {
  filterInput: string;
  onFilterChange: Function;
}) => {
  return (
    <div>
      <p>Filter shown people</p>
      <input
        type="text"
        onChange={(event) => onFilterChange(event.target.value)}
        value={filterInput}
        className="text-black px-2 py-1"
        placeholder="Enter name"
      />
    </div>
  );
};
