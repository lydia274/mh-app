import React from "react";

const LogItem = ({ entry }) => {
  if (!entry) {
    return <h1>Log entry not found</h1>;
  }

  return (
    <div>
      <h1>Detail for entry on {entry.date}</h1>
      <h2>Thoughts</h2>
      <p>{entry.thoughts}</p>
      <h2>Gratitude</h2>
      <p>{entry.gratitude}</p>
      <h2>Mood</h2>
      <p>{entry.mood}</p>
    </div>
  );
};

export default LogItem;
