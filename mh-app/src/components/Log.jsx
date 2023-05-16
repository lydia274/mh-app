import React, { useState, useEffect } from "react"
import axios from "axios"
import DisplayLog from "../pages/DisplayLog"

const Log = () => {
  const [form, setForm] = useState({
    date: "",
    thoughts: "",
    gratitude: "",
    mood: 0,
    items: {},
  })

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
  ]

  const [logs, setLogs] = useState([])
  useEffect(() => {
    axios
      .get("https://ironrest.fly.dev/api/mh-app-log")
      .then((response) => setLogs(response.data))
      .catch((error) => console.error(error))
  }, [])

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleButtonClick = (item) => {
    setForm((prevState) => ({
      ...prevState,
      items: { ...prevState.items, [item]: !prevState.items[item] },
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newLogEntry = {
      date: form.date,
      thoughts: form.thoughts,
      gratitude: form.gratitude,
      mood: form.mood,
      items: itemsList.filter((item) => form.items[item]),
    }

    try {
      const response = await axios.post(
        "https://ironrest.fly.dev/api/mh-app-log",
        newLogEntry
      )
      console.log(response.data)
      setForm({
        date: "",
        thoughts: "",
        gratitude: "",
        mood: 0,
        items: {},
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-container">
      <form className="log-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="thoughts">Thoughts:</label>
          <textarea
            id="thoughts"
            name="thoughts"
            value={form.thoughts}
            onChange={handleChange}
            required
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
              <label>
                <input
                  type="checkbox"
                  name={`item-${index}`}
                  checked={form.items[item] || false}
                  onChange={() => handleButtonClick(item)}
                />
                {item}
              </label>
            </div>
          ))}
        </div>

        <button type="submit" className="learn-more-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Log
