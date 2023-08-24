"use client";
import React, { useState, useEffect } from "react";
import { PhoneFilter } from "./PhoneFilter";
import { PhonePeople } from "./PhonePeople";
import { PhoneForm } from "./PhoneForm";

export const Phonebook = () => {
  const [people, setPeople] = useState([
    { name: "Arto Hellas", number: "044917239" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [filteredPeople, setFilteredPeople] = useState(people);
  const [filterInput, setFilterInput] = useState<string>("");

  const [newName, setNewName] = useState<string>("");
  const [newNumber, setNewNumber] = useState<string>("");

  const [nameInput, setNameInput] = useState<string>("");
  const [numberInput, setNumberInput] = useState<string>("");

  //Function to add input field values as new names and numbers to the existing persons array

  function AddName(event: React.MouseEvent<HTMLElement>) {
    //Prevents form submit action so the page doesn't refresh

    event.preventDefault();

    //Check if the name exists in the persons array. If it exists then give an alert to the user, otherwise add it to the array

    if (people.some((person) => person.name === newName)) {
      alert(`${newName} already exists.`);
    } else {
      setPeople([...people, { name: newName, number: newNumber }]);
    }

    //Clear input fields after pressing "Add"

    setNameInput("");
    setNumberInput("");
  }

  //Track input field values and set them to correct variables

  useEffect(() => {
    setNewName(nameInput);
    setNewNumber(numberInput);

    setFilteredPeople(
      people.filter((person) =>
        person.name.toLowerCase().includes(filterInput.toLowerCase()),
      ),
    );
  }, [nameInput, numberInput, filterInput]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Phonebook</h2>
      <PhoneFilter filterInput={filterInput} onFilterChange={setFilterInput} />
      <PhoneForm
        onNumberChange={setNewNumber}
        onNameChange={setNewName}
        addName={AddName}
        nameInput={nameInput}
        numberInput={numberInput}
      />
      <PhonePeople filteredPeople={filteredPeople} />
    </div>
  );
};
