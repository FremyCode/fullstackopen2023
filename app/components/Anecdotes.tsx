"use client";
import React, { useEffect, useState } from "react";

export const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(Array(8).fill(0));

  const [selected, setSelected] = useState<number>(0);

  const [mostVotes, setMostVotes] = useState<number>(0);

  //Pseudo-randomly selects an anecdote from the array using Math.random()

  function nextAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  //Adds a point to the points array for the currently displayed anecdote

  function voteForAnecdote() {
    const newVotes = [...points];
    newVotes[selected] += 1;
    setPoints(newVotes);
  }

  //Goes through the points array and returns the index of the biggest number
  //Index is then used to render to anecdote and the point value from their respective arrays

  function findMostVoted() {
    let mostVoted = points[0];
    let index = 0;

    for (let i = 1; i < points.length; i++) {
      if (points[i] > mostVoted) {
        mostVoted = points[i];
        index = i;
      }
    }

    setMostVotes(index);
  }

  //useEffect to keep track of the most voted anecdote, runs the function to find most votes
  //every time the points- array is changed

  useEffect(() => {
    findMostVoted();
  }, [points]);

  return (
    <>
      <div className="flex flex-col p-5">
        <h2 className="text-xl py-2 font-bold">Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p className="font-bold">has {points[selected]} votes</p>

        <div className="flex">
          <div className="p-2">
            <button
              onClick={() => voteForAnecdote()}
              className="bg-slate-600 rounded-xl p-2 min-w-[8dvw]"
            >
              Vote
            </button>
          </div>
          <div className="p-2">
            <button
              onClick={() => nextAnecdote()}
              className="bg-slate-600 rounded-xl p-2 min-w-[8dvw]"
            >
              Next anecdote
            </button>
          </div>
        </div>
        <h2 className="text-xl py-2 font-bold">Anecdote with most votes</h2>
        <p>{anecdotes[mostVotes]}</p>
        <p className="font-bold">has {points[mostVotes]} votes</p>
      </div>
    </>
  );
};
