import React from "react"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="border ">
      <div className="border flex">
        <div>10/10 mood</div>
        <div>
          <button>SOS</button>
        </div>
      </div>

      <h1>Hello human</h1>
      <p>Take a deep breath: everyone loves you</p>
      <div>Gratitude placeholder</div>
    </div>
  )
}

export default HomePage
