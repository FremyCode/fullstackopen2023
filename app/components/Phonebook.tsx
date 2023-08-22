"use client";
import React, { useState, useEffect } from "react";

export const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "044917239" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [filteredPersons, setFilteredPersons] = useState(persons)

  const [newName, setNewName] = useState<string>("");
  const [newNumber, setNewNumber] = useState<string>("");

  const [nameInput, setNameInput] = useState<string>("");
  const [numberInput, setNumberInput] = useState<string>("");
  const [filterInput, setfilterInput] = useState<string>("");

  //Function to add input field values as new names and numbers to the existing persons array

  function AddName(event: React.MouseEvent<HTMLElement>) {
    //Prevents form submit action so the page doesn't refresh

    event.preventDefault();

    //Check if the name exists in the persons array. If it exists then give an alert to the user, otherwise add it to the array

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists.`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }

    //Clear input fields after pressing "Add"

    setNameInput("");
    setNumberInput("");
  }

  //Track input field values and set them to correct variables

  useEffect(() => {
    setNewName(nameInput);
    setNewNumber(numberInput);


    setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase())))
  }, [nameInput, numberInput, filterInput]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Phonebook</h2>
      <p>Filter shown people</p>
      <input
        type="text"
        onChange={(event) => setfilterInput(event.target.value)}
        value={filterInput}
        className="text-black px-2 py-1"
        placeholder="Enter name"
      />
      <form className="">
        <div className="">
          <h2 className="text-lg font-bold">Add a new person</h2>
          <p>Name</p>
          <input
            onChange={(event) => setNameInput(event.target.value)}
            value={nameInput}
            className="text-black px-2 py-1"
            placeholder="Enter name"
          />
        </div>
        <div className="">
          <p>Number</p>
          <input
            type="number"
            onChange={(event) => setNumberInput(event.target.value)}
            value={numberInput}
            className="text-black px-2 py-1"
            placeholder="Enter number"
          />
        </div>
        <div className="py-2">
          <button
            type="submit"
            className="bg-slate-600 px-5 py-3 rounded-xl font-bold"
            onClick={(event) => AddName(event)}
          >
            Add
          </button>
        </div>
      </form>
      <h2 className="text-xl font-bold">Numbers</h2>
      {filteredPersons.map((person, index) => (
        <p key={index} className="py-2">
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};
