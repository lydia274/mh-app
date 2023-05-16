import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MoodAvg from "../components/moodAvg"
import axios from "axios"
import Breath from "../components/Breath.jsx"

function HomePage() {
  const [gratitudeMessages, setGratitudeMessages] = useState([])
  const [randomMessage, setRandomMessage] = useState("")

  useEffect(() => {
    const fetchGratitudeMessages = async () => {
      try {
        const response = await axios.get(
          "https://ironrest.fly.dev/api/mh-app-log/"
        )
        const messages = response.data.map((log) => log.gratitude)
        setGratitudeMessages(messages)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }

    fetchGratitudeMessages()
  }, [])

  useEffect(() => {
    const updateMessage = () => {
      if (gratitudeMessages.length > 0) {
        const random =
          gratitudeMessages[
            Math.floor(Math.random() * gratitudeMessages.length)
          ]
        setRandomMessage(random)
      }
    }

    const intervalId = setInterval(updateMessage, 4000)

    return () => clearInterval(intervalId)
  }, [gratitudeMessages])

  return (
    <div className="main-div border">
      <div className="border flex">
        <div>
          <MoodAvg />
        </div>
        <div>
          <button>SOS</button>
        </div>
      </div>
      <div className="border">
        <h1>Hello there!</h1>
        <p>
          Welcome to your mental health wellness app. Embrace well-being
          together. Explore, breathe, express. Join us this Mental Health
          Awareness Month.
        </p>

        <Breath />
      </div>
      <div>
        Here is one thing to make you happier today:{" "}
        {randomMessage || "Gratitude!"}
      </div>
    </div>
  )
}

export default HomePage
