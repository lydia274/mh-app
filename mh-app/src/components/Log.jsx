import React, { useState } from "react";

const Log = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [form, setForm] = useState({
    date: "",
    thoughts: "",
    gratitude: "",
    mood: 0,
  });

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

    const newLogEntry = {
      date: form.date,
      thoughts: form.thoughts,
      gratitude: form.gratitude,
      mood: form.mood,
    };

    fetch("https://ironrest.fly.dev/api/mh-app-log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLogEntry),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setForm({
      date: "",
      thoughts: "",
      gratitude: "",
      mood: 0,
    });
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

      <div>
        {itemsList.map((item, index) => (
          <div key={index}>
            <button
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: buttonStates[index] ? "green" : "red",
              }}
              onClick={() => handleButtonClick(index)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Log;
