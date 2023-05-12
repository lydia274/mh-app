import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DisplayLog = () => {
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    const storedLogEntries =
      JSON.parse(localStorage.getItem("logEntries")) || [];
    setLogEntries(storedLogEntries);
  }, []);

  return (
    <div>
      <h1>Log Entries</h1>
      {logEntries.length > 0 ? (
        <ul>
          {logEntries.map((entry, index) => (
            <li key={index}>
              <h2>{entry.date}</h2>
              <p>{entry.thoughts.substring(0, 100)}...</p>
              <Link to={`/logs/${index}`}>Read more</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No log entries found</p>
      )}
    </div>
  );
};

export default DisplayLog;
