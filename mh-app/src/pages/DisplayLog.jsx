import React from "react";

const DisplayLog = ({ logs }) => {
  return (
    <div>
      {logs &&
        logs.map((log, index) => (
          <div key={index}>
            <h2>Date: {log.date}</h2>
            <p>Thoughts: {log.thoughts}</p>
            <p>Mood: {log.mood}</p>
            <ul>
              {log.items &&
                log.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default DisplayLog;
