import React, { useState, useEffect } from "react";

const Log = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [form, setForm] = useState({
    date: "",
    thoughts: "",
    gratitude: "",
    mood: 0,
  });
  const messages = ["Keep going!", "You can do it!", "Believe in yourself!"];
  const [cheerMessage, setCheerMessage] = useState("");

  const itemsList = [
    "Get support",
    "Stay active",
    "Relax your mind",
    "Breathe deeply",
    "Practice mindfulness",
    "Talk to someone",
    "Stick to a routine",
    "Build a support system",
    "Monitor your mood",
    "Face your fears",
  ];

  const [buttonStates, setButtonStates] = useState(
    new Array(itemsList.length).fill(false)
  );

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogEntries([...logEntries, form]);

    setForm({
      date: "",
      thoughts: "",
      gratitude: "",
      mood: 0,
    });

    setCheerMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  const handleButtonClick = (index) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="thoughts">Thoughts:</label>
        <textarea
          id="thoughts"
          name="thoughts"
          value={form.thoughts}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gratitude">Gratitude:</label>
        <textarea
          id="gratitude"
          name="gratitude"
          value={form.gratitude}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mood">Mood (0-10):</label>
        <input
          type="number"
          id="mood"
          name="mood"
          min="0"
          max="10"
          value={form.mood}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      {cheerMessage && <p>{cheerMessage}</p>}
      <div>
        {itemsList.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <button
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: buttonStates[index] ? "green" : "red",
              }}
              onClick={() => handleButtonClick(index)}
            >
              {buttonStates[index] ? "True" : "False"}
            </button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Log;
