import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const handleNext = () => {
    let nextAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextAnecdote);
  };

  const handleVote = () => {
    let copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
  };

  const getMostVoted = () => {
    const claves = Object.keys(points);
    let maxClave = 0;
    claves.forEach((c) => {
      maxClave = points[maxClave] < points[c] ? points[c] : maxClave;
    });
    return maxClave;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMostVoted()]}</p>
      <p>has {points[getMostVoted()]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.createRoot(document.querySelector("#root")).render(
  <App anecdotes={anecdotes} />
);
