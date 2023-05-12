import React, { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import data from "../assets/data.json"

function BrowseItem() {
  const [item, setItem] = useState({})
  const params = useParams()
  console.log(params)
  //   const navigateTo = useNavigate()

  useEffect(() => {
    const selectedItem = data.find((item) => {
      return item.id === +params.id
    })
    setItem(selectedItem)
  }, [])

  return (
    <div className="border">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <h4>Common symptoms</h4>
      <ul>
        <li>{item.symptoms}</li>
      </ul>
      <h4>Try these:</h4>
      <ul>
        <li>{item.copingMechanisms}</li>
      </ul>
      <p>{item.cheeringUpMessage}</p>
    </div>
  )
}

export default BrowseItem
