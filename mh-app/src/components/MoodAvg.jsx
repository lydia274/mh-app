import React, { useState, useEffect } from "react"
import axios from "axios"

const MoodAvg = () => {
  const [averageMood, setAverageMood] = useState(0)

  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const response = await axios.get(
          "https://ironrest.fly.dev/api/mh-app-log"
        )
        const data = response.data

        // Get the last 7 entries
        const lastEntries = data.slice(-7)

        // Calculate the average mood value
        const sum = lastEntries.reduce(
          (acc, entry) => acc + parseInt(entry.mood),
          0
        )
        const avg = sum / lastEntries.length

        setAverageMood(avg)
      } catch (error) {
        console.error("Error fetching mood data:", error)
      }
    }

    fetchMoodData()
  }, [])

  return (
    <div>
      <p id="mood">{averageMood.toFixed(2)}/10</p>
    </div>
  )
}

export default MoodAvg
