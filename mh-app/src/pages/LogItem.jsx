import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const LogItem = () => {
  const [log, setLog] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ironrest.fly.dev/api/mh-app-log/${id}`
        )
        setLog(response.data)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }

    fetchData()
  }, [id])

  return (
    <div className="box" id="log-box">
      <h2>{formatDate(log.date)}</h2>
      <p>Thoughts: {log.thoughts}</p>
      <p>Mood: {log.mood}</p>
      {log.items && (
        <ul>
          {log.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )

  function formatDate(dateString) {
    const options = { month: "long", day: "numeric", year: "numeric" }
    const date = new Date(dateString).toLocaleDateString(undefined, options)
    return date
  }
}

export default LogItem
