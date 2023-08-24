import React from "react";

export const PhoneForm = ({
  onNumberChange,
  onNameChange,
  addName,
  nameInput,
  numberInput,
}: {
  onNumberChange: Function;
  onNameChange: Function;
  addName: Function;
  nameInput: string;
  numberInput: string;
}) => {
  return (
    <div>
      <form className="">
        <div className="">
          <h2 className="text-lg font-bold">Add a new person</h2>
          <p>Name</p>
          <input
            onChange={(event) => onNameChange(event.target.value)}
            value={nameInput}
            className="text-black px-2 py-1"
            placeholder="Enter name"
          />
        </div>
        <div className="">
          <p>Number</p>
          <input
            type="number"
            onChange={(event) => onNumberChange(event.target.value)}
            value={numberInput}
            className="text-black px-2 py-1"
            placeholder="Enter number"
          />
        </div>
        <div className="py-2">
          <button
            type="submit"
            className="bg-slate-600 px-5 py-3 rounded-xl font-bold"
            onClick={(event) => addName(event)}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
