import React from "react";
import { Person, People } from "../types";

export const PhonePeople = ({ filteredPeople }: People) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Numbers</h2>
      {filteredPeople.map((person: Person, index: number) => (
        <p key={index} className="py-2">
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};
