import React from "react";

export const FeedbackButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: Function;
}) => {
  return (
    <button
      onClick={() => onClick(label)}
      className="bg-slate-700 rounded-xl p-3 mx-2 min-w-[8dvw]"
    >
      <p>{label}</p>
    </button>
  );
};
